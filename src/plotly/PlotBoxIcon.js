import React from 'react';
const PlotBoxIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M 21.004,2.009l0,4.491 L 18,6.5 l0-3.5 L 18,2.359 L 18,0 L 8.578,0 l0,0.001 L 6,0.001 l0,6.499 L 3.011,6.5 L 3.011,2.009 L0,2.009 l0,11.991 l 3.011,0 l0-4.5 L 6,9.5 l0,6.5 l 2.5,0 l 0.511,0 L 18,16 l0-2.812 l0-0.188 l0-3.5 l 3.004,0 l0,4.5 L 24,14 L 24,2.009 L 21.004,2.009 z M 9.011,13l0-10 L 15,3 l0,10 L 9.011,13 z" />
    </svg>
  );
};
export default PlotBoxIcon;
