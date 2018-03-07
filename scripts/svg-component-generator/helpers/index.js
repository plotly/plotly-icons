const buildComponentPath = require('./buildComponentPath');
const camelizeElementAttributes = require('./camelizeElementAttributes');
const capitalizeComponentPath = require('./capitalizeComponentPath');
const createDomElement = require('./createDomElement');
const createIndexFile = require('./createIndexFile');
const getComponentNameFromPath = require('./getComponentNameFromPath');
const optimizeSvg = require('./optimizeSvg');
const removeExtensionFromFilePath = require('./removeExtensionFromFilePath');
const setSvgElementColorAttributeValue = require('./setSvgElementColorAttributeValue');

module.exports = {
    buildComponentPath,
    camelizeElementAttributes,
    capitalizeComponentPath,
    createDomElement,
    createIndexFile,
    getComponentNameFromPath,
    optimizeSvg,
    removeExtensionFromFilePath,
    setSvgElementColorAttributeValue,
};
