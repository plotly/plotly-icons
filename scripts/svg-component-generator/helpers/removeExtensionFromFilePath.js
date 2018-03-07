const { basename, dirname, extname, join } = require('path');

function removeExtensionFromFilePath(filePath) {
    return join(dirname(filePath), basename(filePath, extname(filePath)));
}

module.exports = removeExtensionFromFilePath;
