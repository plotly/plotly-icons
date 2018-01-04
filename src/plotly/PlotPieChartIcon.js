import React from 'react';
const PlotPieChartIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M13.688 15.875l9.75 9.75c-1.25 1.313-2.688 2.313-4.375 3-1.688 0.75-3.5 1.063-5.375 1.063-2.438 0-4.75-0.563-6.875-1.813-2.063-1.25-3.75-2.875-5-5-1.188-2.063-1.813-4.375-1.813-6.875s0.625-4.813 1.813-6.875c1.25-2.125 2.938-3.75 5-5 2.125-1.25 4.438-1.813 6.875-1.813zM17.063 16h13.813c0 1.875-0.375 3.625-1.063 5.313-0.75 1.688-1.75 3.188-3 4.438zM29.688 13.688h-13.688v-13.688c2.5 0 4.813 0.625 6.875 1.813 2.125 1.25 3.75 2.938 5 5 1.25 2.125 1.813 4.438 1.813 6.875z" />
    </svg>
  );
};
export default PlotPieChartIcon;
