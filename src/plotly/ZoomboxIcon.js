import React from 'react';
const ZoomboxIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M 16,14l-4-4.017c 0.641-1.008, 1-2.201, 1-3.483c0-3.589-2.912-6.5-6.5-6.5c-3.589,0-6.5,2.911-6.5,6.5 s 2.923,6.5, 6.512,6.5c 1.287,0, 2.487-0.355, 3.495-1L 14,15.993L 16,14z M 3,10l0-7 l 7,0 l0,7 L 3,10 z M 4,4l 5,0 l0,5 L 4,9 L 4,4 z" />
    </svg>
  );
};
export default ZoomboxIcon;
