const jsdom = require('jsdom');
const { JSDOM } = jsdom;

function createDomElement(content) {
    const { window } = new JSDOM(content);
    const element = window.document.querySelector('svg');
    window.close();
    return element;
}

module.exports = createDomElement;
