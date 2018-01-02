import React from 'react';
const PlotScatterIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M0,2A2,2 0 1 0 4,2A2,2 0 1 0 0,2zM 8,8A2,2 0 1 0 12,8A2,2 0 1 0 8,8zM 12,3.005A2,2.005 0 1 0 16,3.005A2,2.005 0 1 0 12,3.005zM 4,14A2,2 0 1 0 8,14A2,2 0 1 0 4,14zM 16,11A2,2 0 1 0 20,11A2,2 0 1 0 16,11zM 20,5A2,2 0 1 0 24,5A2,2 0 1 0 20,5z" />
    </svg>
  );
};
export default PlotScatterIcon;
