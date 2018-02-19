import React from 'react';
const PlotVolume3dIcon = ({ className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width="32" height="32" viewBox="0 0 32 32" className={classes}>
      <path d="M2 25l12 5v-14l-12-5zM18 16v14l12-5v-14zM16 1l-14 6 14 6 14-6z" />
    </svg>
  );
};
export default PlotVolume3dIcon;
