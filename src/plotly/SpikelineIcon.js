import React from 'react';
const SpikelineIcon = ({ className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width="32" height="32" viewBox="0 0 32 32" className={classes}>
      <path d="M32 6.438c0 3.563-2.875 6.5-6.438 6.5s-6.5-2.938-6.5-6.5c0-3.563 2.938-6.438 6.5-6.438s6.438 2.875 6.438 6.438zM11.563 8.875h5.75v-5.75h-5.75zM0 8.875h5.75v-5.75h-5.75zM23.125 20.5h5.75v-5.813h-5.75zM23.125 32h5.75v-5.75h-5.75z" />
    </svg>
  );
};
export default SpikelineIcon;
