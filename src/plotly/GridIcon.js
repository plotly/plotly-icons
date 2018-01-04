import React from 'react';
const GridIcon = ({ className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" className={classes}>
      <path d="M 0,0l0,16 l 16,0 l0-16 L 0,0 z M 7,14L 2,14 l0-5 l 5,0 L 7,14 z M 7,7L 2,7 l0-5 l 5,0 L 7,7 z M 14,14l-5,0 l0-5 l 5,0 L 14,14 z M 14,7l-5,0 l0-5 l 5,0 L 14,7 z" />
    </svg>
  );
};
export default GridIcon;
