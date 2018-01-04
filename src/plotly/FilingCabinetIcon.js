import React from 'react';
const FilingCabinetIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M28 11h-24c-1 0-2 1-2 2v14c0 1 1 2 2 2h24c1 0 2-1 2-2v-14c0-1-1-2-2-2zM21.625 17.625c0 1-1 2-2 2h-7.625c-1 0-2-1-2-2v-0.625c0-1 1-2 2-2h7.625c1 0 2 1 2 2zM30 3h-28c-1 0-2 1-2 2v4h32v-4c0-1-1-2-2-2z" />
    </svg>
  );
};
export default FilingCabinetIcon;
