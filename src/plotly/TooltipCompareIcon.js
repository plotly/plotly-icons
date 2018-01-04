import React from 'react';
const TooltipCompareIcon = ({ className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width="17.993999481201172" height="16" viewBox="0 0 17.993999481201172 16" className={classes}>
      <path d="M 2.998,1.019L 2.998,1 L 0.006,4.008L 3,7l0,0l 15,0 L 18,1.019 L 2.998,1.019 z M 2.998,9.007L 2.998,8.992 l-2.992,3.002L 3,15l0,0l 15,0 l0-6 L 2.998,9.007z" />
    </svg>
  );
};
export default TooltipCompareIcon;
