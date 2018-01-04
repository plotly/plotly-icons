import React from 'react';
const PlotHistIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M0 20h5.313v6.688h-5.313zM6.688 12h5.313v14.688h-5.313zM13.313 5.313h5.375v21.375h-5.375zM20 12h5.313v14.688h-5.313zM26.688 20h5.313v6.688h-5.313z" />
    </svg>
  );
};
export default PlotHistIcon;
