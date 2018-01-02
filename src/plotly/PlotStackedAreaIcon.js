import React from 'react';
const PlotStackedAreaIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M 11,13L0,8.984L 0.011,16L 24,16L 24,12.004L 18.017,9.022 zM 18,2L 11,6.022L 0.016,0L0,6.982L 11,11L 18,7L 24,10.002L 24,4.97 z" />
    </svg>
  );
};
export default PlotStackedAreaIcon;
