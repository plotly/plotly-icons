import React from 'react';
const PlotStackedAreaIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M14.688 22.688l-14.688-5.375v9.375h32v-5.375l-8-3.938zM24 8l-9.313 5.375-14.688-8.063v9.313l14.688 5.375 9.313-5.313 8 4v-6.75z" />
    </svg>
  );
};
export default PlotStackedAreaIcon;
