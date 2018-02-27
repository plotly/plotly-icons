import React from 'react';
const PlotIsosurface3dIcon = ({ className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width="32" height="32" viewBox="0 0 32 32" className={classes}>
      <path d="M30.313 18.375l-2.375-2.188-4.438-11.5 1.063-1.375 4.063 7.563zM17.813 23.563l-10.25-7 3.438-11.563h11.875l4.375 11.25zM24 2.938l-1.063 1.375h-12.125l-3-1.625 7.75-0.938zM6.875 2.938l3.438 1.875-3.375 11.688-5.313 2.875v-7.813zM1.75 20.063l5.438-2.938 10.313 7-0.938 6.125-9.313-2.563zM24.5 27.063l-7.25 3.063 0.875-5.938 9.5-7.375 2.75 2.563z" />
    </svg>
  );
};
export default PlotIsosurface3dIcon;
