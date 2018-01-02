import React from 'react';
const PlotFitIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M 1,10.5A2,2 0 1 0 5,10.5A2,2 0 1 0 1,10.5zM 7,2A2,2 0 1 0 11,2A2,2 0 1 0 7,2zM 19,5.5A2,2 0 1 0 23,5.5A2,2 0 1 0 19,5.5zM 13,14A2,2 0 1 0 17,14A2,2 0 1 0 13,14zM 24,13.006L0,6.006L0,3L 24,10 z" />
    </svg>
  );
};
export default PlotFitIcon;
