import React from 'react';
const PlotLineIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M 24-0.010l-7,11.010l-12-11L0,10.016l0,5.974 L 6,5l 11.992,11l 6.008-10L 24-0.010 z" />
    </svg>
  );
};
export default PlotLineIcon;
