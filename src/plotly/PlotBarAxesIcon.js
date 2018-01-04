import React from 'react';
const PlotBarAxesIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M0 0h1.625v32h-1.625zM32 30.375v1.625h-32v-1.625zM3.188 12.813h3.188v16h-3.188zM8 11.188h3.188v17.625h-3.188zM12.813 12.813h3.188v16h-3.188zM17.625 9.625h3.188v19.188h-3.188zM22.375 8h3.25v20.813h-3.25zM27.188 4.813h3.188v24h-3.188z" />
    </svg>
  );
};
export default PlotBarAxesIcon;
