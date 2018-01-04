import React from 'react';
const PlotAreaStackedIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M0 25.25v6.125h32v-10.25h-1.813l-10.063 3.875-7.313-6.688zM0 16.938v4.5l12.813-6.813 7.25 6.813 9.938-3.813h2v-16l-9.813 10.688-8.313-8.875z" />
    </svg>
  );
};
export default PlotAreaStackedIcon;
