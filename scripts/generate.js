const path = require('path');
const componentsGenerator = require('react-svg-components-generator');

componentsGenerator({
  svgSrcDir: path.join(__dirname, '../src/svg'),
  componentDestDir: path.join(__dirname, '../src/components'),
});
