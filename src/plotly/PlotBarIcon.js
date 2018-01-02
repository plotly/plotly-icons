import React from 'react';
const PlotBarIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M0,12L 8,12L 8,16L0,16zM0,6.021L 16.021,6.021L 16.021,10L0,10zM0,0L 24,0L 24,4.021L0,4.021z" />
    </svg>
  );
};
export default PlotBarIcon;
