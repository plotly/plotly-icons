import React from 'react';
const PlotBarIcon = ({ className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width="32" height="32" viewBox="0 0 32 32" className={classes}>
      <path d="M0 21.313h10.688v5.375h-10.688zM0 13.375h21.375v5.313h-21.375zM0 5.313h32v5.375h-32z" />
    </svg>
  );
};
export default PlotBarIcon;
