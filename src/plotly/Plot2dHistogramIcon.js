import React from 'react';
const Plot2dHistogramIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M 24,8.003L 20,8.003L 20,4L 16.004,4L 16.004,0L 8.021,0L 8.021,4L 4,4L 4,4.006L0,4.006L0,8.013L 4,8.013L 4,8.516L 4.003,8.516L 4.003,11.999L 8,11.999L 8,16L 15.979,16L 15.979,11.999L 24,11.999 z" />
    </svg>
  );
};
export default Plot2dHistogramIcon;
