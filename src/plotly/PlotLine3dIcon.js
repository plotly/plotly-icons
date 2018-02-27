import React from 'react';
const PlotLine3dIcon = ({ className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width="32" height="32" viewBox="0 0 32 32" className={classes}>
      <path d="M21.5 15.625l-5.438-1.625 3.25 5.313zM26 8l-4.5 7.625 2.688 0.75 1.813-3.063 2.375 4.313-4.188-1.25-4.875 8.313-5.875-9.938-9.125 2.688 6.375-7.438 2.75 4.75 2.563-0.75h0.063l-5.375-8.688-10.688 13.313h0.063l-0.063 0.063 16 8 16-8z" />
    </svg>
  );
};
export default PlotLine3dIcon;
