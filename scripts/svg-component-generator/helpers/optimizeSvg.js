function optimizeSvg(svgoInstance, svg) {
    return new Promise((resolve, reject) => {
        svgoInstance.optimize(svg, (result) => {
            resolve(result.data);
        });
    });
}

module.exports = optimizeSvg;
