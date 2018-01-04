import React from 'react';
const ZoomPlusIcon = ({ className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" className={classes}>
      <path d="M 0.013,1.012l0,13.988 l 13.999,0 L 14.012,1.012 L 0.013,1.012 z M 11.012,9.007l-2.999,0 l0,2.999 l-2,0 L 6.013,9.007 l-3,0 L 3.013,7.008 l 3,0 L 6.013,4.010 l 2,0 l0,2.998 l 2.999,0 L 11.012,9.007 z" />
    </svg>
  );
};
export default ZoomPlusIcon;
