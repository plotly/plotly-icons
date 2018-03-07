const _ = require('lodash');

function getComponentNameFromPath(path) {
    return _.last(path.split('/'));
}

module.exports = getComponentNameFromPath;
