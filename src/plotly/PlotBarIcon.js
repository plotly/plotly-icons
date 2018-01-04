import React from 'react';
const PlotBarIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M0 21.313h10.688v5.375h-10.688zM0 13.375h21.375v5.313h-21.375zM0 5.313h32v5.375h-32z" />
    </svg>
  );
};
export default PlotBarIcon;
