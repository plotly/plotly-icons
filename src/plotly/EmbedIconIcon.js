import React from 'react';
const EmbedIconIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M4.313 15.813l5.75-5.75-2.125-2.125-7.938 7.875 7.938 7.938 2.125-2.125zM25.188 9l-1.125-1.063-2.125 2.125 1.125 1.063 4.625 4.688-5.75 5.813 2.125 2.125 7.938-7.938zM14.938 26.75h-3l5.563-21.5h3z" />
    </svg>
  );
};
export default EmbedIconIcon;
