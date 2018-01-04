import React from 'react';
const PlotDHistogramBricksIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M15 7.063h-9v4.625h9zM26 7.063h-9v4.625h9zM6 24.938h9v-4.625h-9zM17 24.938h9v-4.625h-9zM11.5 18.313h9v-4.625h-9zM22.5 13.688v4.625h9v-4.625zM9.5 13.688h-9v4.625h9z" />
    </svg>
  );
};
export default PlotDHistogramBricksIcon;
