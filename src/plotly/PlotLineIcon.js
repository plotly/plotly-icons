import React from 'react';
const PlotLineIcon = ({ className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width="32" height="32" viewBox="0 0 32 32" className={classes}>
      <path d="M32 5.313l-9.375 14.688-15.938-14.688-6.688 13.375v7.938l8-14.625 16 14.625 8-13.313z" />
    </svg>
  );
};
export default PlotLineIcon;
