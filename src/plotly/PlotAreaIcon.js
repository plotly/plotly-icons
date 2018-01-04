import React from 'react';
const PlotAreaIcon = ({ className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width="32" height="32" viewBox="0 0 32 32" className={classes}>
      <path d="M32 26.625l-12-16-4 5.375-6.688-10.75-9.313 21.375z" />
    </svg>
  );
};
export default PlotAreaIcon;
