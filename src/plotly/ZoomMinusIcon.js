import React from 'react';
const ZoomMinusIcon = ({ className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" className={classes}>
      <path d="M 0.004,1l0,14 l 14,0 l0-14 L 0.004,1 z M 11,9L 3,9 l0-2 l 8,0 L 11,9 z" />
    </svg>
  );
};
export default ZoomMinusIcon;
