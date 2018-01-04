import React from 'react';
const TooltipBasicIcon = ({ className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width="24" height="16" viewBox="0 0 24 16" className={classes}>
      <path d="M 6,2L 6,2l-6,6l 6,5.991l0,0.009 l 18-0.004L 24,2 L 6,2 z" />
    </svg>
  );
};
export default TooltipBasicIcon;
