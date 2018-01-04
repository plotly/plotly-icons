import React from 'react';
const PlotHeatmapIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M0 5.313h5.313v5.375h-5.313zM5.313 21.313v-5.313h-5.313v10.688h10.688v-5.375zM10.688 5.313h5.313v5.375h-5.313zM5.313 10.688h5.375v5.313h-5.375zM16 10.688h5.313v5.313h-5.313zM10.688 16h5.313v5.313h-5.313zM26.688 5.313h-5.375v5.375h5.375v5.313h5.313v-10.688zM21.313 16h5.375v5.313h-5.375zM16 21.313h5.313v5.375h-5.313zM26.688 21.313h5.313v5.375h-5.313z" />
    </svg>
  );
};
export default PlotHeatmapIcon;
