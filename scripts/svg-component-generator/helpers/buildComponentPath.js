const path = require('path');
const capitalizeComponentPath = require('./capitalizeComponentPath');

function buildComponentPath(options = {}) {
    const {
        svgSrcDir,
        componentDestDir,
        svgPath,
        prefix = '',
        suffix = '',
    } = options;

    const svgRelativePath = path.parse(path.relative(svgSrcDir, svgPath));
    const componentRelativePathStr = path.join(svgRelativePath.dir, `${prefix}${svgRelativePath.name}${suffix}`);
    return path.join(componentDestDir, capitalizeComponentPath(componentRelativePathStr));
}

module.exports = buildComponentPath;
