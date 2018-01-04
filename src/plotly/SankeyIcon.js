import React from 'react';
const SankeyIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M1.313 13.375v-0.063h21.375v4l9.313-8-9.313-8v4h-22.688v18.688c4.5 0 8.25 1.625 10.313 4.438l-1.875 0.75 6.25 2.813 2.813-6.25-2.063 0.75c-2.75-4.563-7.938-7.375-14.125-7.75v-0.063c9.938 0.188 15.688 2.25 21.375 7.625l-1.563 1.5 6.875 0.188 0.188-6.875-1.563 1.5c-6.813-6.5-13.813-9.063-25.313-9.25z" />
    </svg>
  );
};
export default SankeyIcon;
