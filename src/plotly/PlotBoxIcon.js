import React from 'react';
const PlotBoxIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M28 8v6h-4v-8.688h-16v8.688h-4v-6h-4v16h4v-6h4v8.688h16v-8.688h4v6h4v-16zM12 22.688v-13.375h8v13.375z" />
    </svg>
  );
};
export default PlotBoxIcon;
