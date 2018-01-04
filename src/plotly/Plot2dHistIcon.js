import React from 'react';
const Plot2dHistIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M32 16h-5.313v-5.313h-5.375v-5.375h-10.625v5.375h-10.688v5.313h5.313v5.313h5.375v5.375h10.625v-5.375h10.688z" />
    </svg>
  );
};
export default Plot2dHistIcon;
