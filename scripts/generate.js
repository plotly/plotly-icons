const path = require('path');
const componentsGenerator = require('./svg-component-generator');

componentsGenerator({
  svgSrcDir: path.join(__dirname, '../src/svg'),
  componentDestDir: path.join(__dirname, '../src/components'),
});
