import React from 'react';
const PlotIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M 16,2l-5.5,5.5l-3.5-3.5l-5,5l0,3 l 5-5l 3.5,3.5l 5.5-5.5L 16,2 zM 2,14L 2,3.5L 2,2L 2,0L 0,0L 0,8L 0,16L 7.531,16L 16.062,16L 16.062,14L 14.062,14 z" />
    </svg>
  );
};
export default PlotIcon;
