const _ = require('lodash');

function capitalizeComponentPath(path) {
    return path.split('/').map((str) => {
        return _.startCase(str).split(' ').join('');
    }).join('/');
}

module.exports = capitalizeComponentPath;
