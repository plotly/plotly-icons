const fs = require('fs-extra');
const path = require('path');
const removeExtensionFromFilePath = require('./removeExtensionFromFilePath');

function createIndexFile(dir) {
    let indexFileContent = [];
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            createIndexFile(path.join(dir, file, '/'));
            indexFileContent.push(`export * as ${removeExtensionFromFilePath(file)} from './${file}';`);
        } else {
            indexFileContent.push(`export ${removeExtensionFromFilePath(file)} from './${file}';`);
        }
    });

    fs.outputFileSync(path.join(dir, 'index.js'), indexFileContent.join('\n'), 'utf-8');
}

module.exports = createIndexFile;
