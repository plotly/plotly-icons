const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');
const svgo = require('svgo');
const nunjucks = require('nunjucks');
const _ = require('lodash');
const helpers = require('./helpers');

nunjucks.configure({autoescape: false});

function generator(options) {
  const {
    svgSrcDir,
    componentDestDir,
    templatesDir = path.join(__dirname, './templates'),
    stripTitle = true,
    componentNamePrefix = '',
    componentNameSuffix = 'Icon',
  } = options;

  // Empty the contents of components directory
  fs.emptyDirSync(componentDestDir);

  // Get template content
  const iconComponentTemplate = fs.readFileSync(
    path.join(templatesDir, 'iconComponent.nunjucks'),
    'utf8'
  );
  const iconBaseComponentTemplate = fs.readFileSync(
    path.join(templatesDir, 'iconBaseComponent.nunjucks'),
    'utf8'
  );

  const iconBaseComponentPath = path.join(componentDestDir, 'IconBase.js');

  const svgoInstance = new svgo();

  glob(svgSrcDir + '/**/*.svg', async (err, svgPaths) => {
    if (err) {
      throw err;
    }

    for (let svgPath of svgPaths) {
      const componentPath = helpers.buildComponentPath({
        svgSrcDir,
        componentDestDir,
        svgPath,
        prefix: componentNamePrefix,
        suffix: componentNameSuffix,
      });

      const componentFilePath = `${componentPath}.js`;
      const componentName = helpers.getComponentNameFromPath(componentPath);

      const svg = fs.readFileSync(svgPath, 'utf-8');
      const optimizedSvg = await helpers.optimizeSvg(svgoInstance, svg);

      const svgDomElement = helpers.createDomElement(optimizedSvg);
      helpers.camelizeElementAttributes(svgDomElement);

      if (!_.includes(_.toLower(componentName), 'tracetype')) {
        helpers.setSvgElementColorAttributeValue(svgDomElement, 'currentColor');
      }

      if (stripTitle) {
        const svgTitle = svgDomElement.getElementsByTagName('title')[0];
        svgTitle && svgDomElement.removeChild(svgTitle);
      }

      fs.outputFileSync(
        componentFilePath,
        nunjucks.renderString(iconComponentTemplate, {
          componentName,
          viewBox: svgDomElement.getAttribute('viewBox'),
          iconBaseComponentPath: `./${path.relative(
            path.parse(componentPath).dir,
            iconBaseComponentPath
          )}`,
          content: svgDomElement.innerHTML,
        })
      );
    }

    // Create index.js files for easier import
    helpers.createIndexFile(componentDestDir);

    // Create the IconBase component
    fs.outputFileSync(
      iconBaseComponentPath,
      nunjucks.renderString(iconBaseComponentTemplate, {})
    );
  });
}

module.exports = generator;
