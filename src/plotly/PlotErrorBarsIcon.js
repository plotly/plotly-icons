import React from 'react';
const PlotErrorBarsIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M0 9.313h4v3.438h-2v4h2v3.25h-4v4h12v-4h-4v-3.25h1.938v-4h-1.938v-3.438h4v-4h-12zM32 12v-4h-12v4h4v3.313h-2v4h2v3.375h-4v4h12v-4h-4v-3.375h2v-4h-2v-3.313z" />
    </svg>
  );
};
export default PlotErrorBarsIcon;
