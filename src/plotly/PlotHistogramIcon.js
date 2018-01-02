import React from 'react';
const PlotHistogramIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M0,11.015L 4.003,11.015L 4.003,16L0,16zM 5,5.015L 9.003,5.015L 9.003,16L 5,16zM 10,0L 14.011,0L 14.011,16L 10,16zM 15,5.014L 19.004,5.014L 19.004,16L 15,16zM 19.996,11.015L 24,11.015L 24,16L 19.996,16z" />
    </svg>
  );
};
export default PlotHistogramIcon;
