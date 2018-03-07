const _ = require('lodash');

function capitalizeComponentPath(path) {
  return path
    .split('/')
    .map(str => {
      return _.startCase(str)
        .split(' ')
        .join('')
        .replace('3D', '3d')
        .replace('2D', '2d');
    })
    .join('/');
}

module.exports = capitalizeComponentPath;
