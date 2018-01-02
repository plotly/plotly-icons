import React from 'react';
const PanIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M 16,8l-3-3l0,2 l-4,0 l0-4 l 2,0 l-3-3l-3,3l 2,0 l0,4 L 3,7 L 3,4.999 L 0,8l 2.977,3l0-2 L 7,9 l0,4 L 5,13 l 3,3l 3-3l-2,0 l0-4 l 4,0 l0,2.001 L 16,8z" />
    </svg>
  );
};
export default PanIcon;
