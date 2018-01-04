import React from 'react';
const PlotLineIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M32 5.313l-9.375 14.688-15.938-14.688-6.688 13.375v7.938l8-14.625 16 14.625 8-13.313z" />
    </svg>
  );
};
export default PlotLineIcon;
