import React from 'react';
const PlotAreaIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M 24,16l-9-12l-3,4.016L 7.011-0.035L0,16L 24,16 z" />
    </svg>
  );
};
export default PlotAreaIcon;
