import React from 'react';
const PlotHeatmapIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M0,0l 4,0 l0,4 L0,4 L0,0 z M 4,12l0-4 L0,8 l0,4 l0,4 l 4,0 l 4,0 l0-4 L 4,12 z M 8,0l 4,0 l0,4 L 8,4 L 8,0 z M 4,4l 4,0 l0,4 L 4,8 L 4,4 z M 12,4l 4,0 l0,4 l-4,0 L 12,4 z M 8,8l 4,0 l0,4 L 8,12 L 8,8 z M 20,0l-4,0 l0,4 l 4,0 l0,4 l 4,0 l0-4 l0-4 L 20,0 z M 16,8l 4,0 l0,4 l-4,0 L 16,8 z M 12,12l 4,0 l0,4 l-4,0 L 12,12 z M 20,12l 4,0 l0,4 l-4,0 L 20,12 z" />
    </svg>
  );
};
export default PlotHeatmapIcon;
