import React from 'react';
const TooltipBasicIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M 6,2L 6,2l-6,6l 6,5.991l0,0.009 l 18-0.004L 24,2 L 6,2 z" />
    </svg>
  );
};
export default TooltipBasicIcon;
