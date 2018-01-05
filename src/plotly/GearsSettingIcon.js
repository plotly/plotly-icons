import React from 'react';
const GearsSettingIcon = ({ className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width="32" height="32" viewBox="0 0 32 32" className={classes}>
      <path d="M14.938 16c0-1.188-0.438-2.188-1.25-3-0.813-0.875-1.813-1.25-3-1.25s-2.188 0.375-3.063 1.25c-0.813 0.813-1.25 1.813-1.25 3s0.438 2.188 1.25 3c0.875 0.875 1.875 1.25 3.063 1.25s2.188-0.375 3-1.25c0.813-0.813 1.25-1.813 1.25-3zM27.75 24.563c0-0.625-0.25-1.125-0.625-1.5-0.438-0.438-0.938-0.688-1.5-0.688-0.625 0-1.125 0.25-1.5 0.688-0.438 0.375-0.688 0.875-0.688 1.5 0 0.563 0.25 1.063 0.625 1.5 0.438 0.375 0.938 0.625 1.563 0.625 0.563 0 1.063-0.25 1.5-0.625 0.375-0.438 0.625-0.938 0.625-1.5zM27.75 7.438c0-0.563-0.25-1.063-0.625-1.5-0.438-0.375-0.938-0.625-1.5-0.625-0.625 0-1.125 0.25-1.5 0.625-0.438 0.438-0.688 0.938-0.688 1.5 0 0.625 0.25 1.125 0.625 1.563 0.438 0.375 0.938 0.625 1.563 0.625 0.563 0 1.063-0.25 1.5-0.625 0.375-0.438 0.625-0.938 0.625-1.563zM21.313 14.5v3.063c0 0.125 0 0.25-0.125 0.313-0.063 0.125-0.125 0.188-0.25 0.188l-2.563 0.375c-0.125 0.438-0.313 0.813-0.563 1.313 0.375 0.5 0.875 1.125 1.5 1.875 0.125 0.125 0.125 0.25 0.125 0.375s0 0.25-0.125 0.313c-0.25 0.313-0.688 0.813-1.375 1.5-0.625 0.625-1.063 1-1.313 1-0.125 0-0.188-0.063-0.313-0.125l-1.938-1.5c-0.375 0.188-0.813 0.375-1.25 0.5-0.125 1.188-0.25 2.063-0.438 2.563-0.063 0.313-0.188 0.438-0.5 0.438h-3.063c-0.125 0-0.25-0.063-0.313-0.125-0.125-0.125-0.188-0.188-0.188-0.313l-0.375-2.563c-0.375-0.125-0.813-0.25-1.25-0.5l-2 1.5c-0.063 0.063-0.188 0.125-0.313 0.125s-0.25-0.063-0.375-0.188c-1.563-1.438-2.375-2.313-2.375-2.625 0-0.125 0.063-0.25 0.125-0.313 0.125-0.188 0.313-0.5 0.688-0.875 0.313-0.438 0.563-0.813 0.75-1.063-0.25-0.5-0.438-0.938-0.563-1.375l-2.563-0.375c-0.063 0-0.188-0.063-0.25-0.188-0.063-0.063-0.125-0.188-0.125-0.313v-3.063c0-0.125 0.063-0.25 0.125-0.313 0.063-0.125 0.188-0.188 0.25-0.188l2.563-0.375c0.125-0.438 0.313-0.813 0.563-1.313-0.375-0.5-0.875-1.125-1.5-1.875-0.063-0.125-0.125-0.25-0.125-0.375s0.063-0.25 0.125-0.313c0.25-0.313 0.688-0.813 1.375-1.5 0.688-0.625 1.125-1 1.313-1 0.125 0 0.25 0.063 0.375 0.125l1.875 1.5c0.375-0.188 0.813-0.375 1.313-0.5 0.125-1.188 0.25-2.063 0.375-2.563 0.063-0.313 0.25-0.438 0.5-0.438h3.063c0.125 0 0.25 0.063 0.375 0.125 0.063 0.125 0.125 0.188 0.125 0.313l0.438 2.563c0.375 0.125 0.75 0.25 1.25 0.5l1.938-1.5c0.063-0.063 0.188-0.125 0.313-0.125s0.25 0.063 0.375 0.188c1.625 1.438 2.375 2.313 2.375 2.625 0 0.125 0 0.25-0.063 0.313-0.188 0.188-0.375 0.5-0.75 0.938-0.313 0.375-0.563 0.75-0.75 1 0.25 0.5 0.438 1 0.563 1.375l2.563 0.375c0.125 0 0.188 0.063 0.25 0.188 0.125 0.063 0.125 0.188 0.125 0.313zM32 23.375v2.313c0 0.188-0.813 0.375-2.5 0.5-0.125 0.313-0.313 0.625-0.5 0.875 0.563 1.25 0.875 2.063 0.875 2.313 0 0.063 0 0.063-0.063 0.125-1.375 0.813-2.063 1.188-2.063 1.188-0.125 0-0.375-0.25-0.813-0.813-0.375-0.5-0.688-0.875-0.813-1.125-0.25 0.063-0.438 0.063-0.5 0.063-0.125 0-0.313 0-0.5-0.063-0.188 0.25-0.5 0.625-0.875 1.125-0.438 0.563-0.688 0.813-0.813 0.813 0 0-0.688-0.375-2.063-1.188 0-0.063-0.063-0.063-0.063-0.125 0-0.25 0.313-1.063 0.875-2.313-0.188-0.25-0.375-0.563-0.5-0.875-1.688-0.125-2.5-0.313-2.5-0.5v-2.313c0-0.188 0.813-0.375 2.5-0.5 0.125-0.375 0.313-0.625 0.5-0.875-0.563-1.25-0.875-2.063-0.875-2.313 0-0.063 0.063-0.063 0.063-0.125 0.063 0 0.25-0.125 0.625-0.313 0.313-0.188 0.625-0.375 0.938-0.563s0.5-0.313 0.5-0.313c0.125 0 0.375 0.313 0.813 0.813 0.375 0.5 0.688 0.875 0.875 1.125 0.188-0.063 0.375-0.063 0.5-0.063 0.063 0 0.25 0 0.5 0.063 0.563-0.813 1.063-1.438 1.5-1.875l0.125-0.063c0 0 0.688 0.438 2.063 1.188 0.063 0.063 0.063 0.063 0.063 0.125 0 0.25-0.313 1.063-0.875 2.313 0.188 0.25 0.375 0.5 0.5 0.875 1.688 0.125 2.5 0.313 2.5 0.5zM32 6.313v2.313c0 0.188-0.813 0.375-2.5 0.5-0.125 0.313-0.313 0.625-0.5 0.875 0.563 1.25 0.875 2.063 0.875 2.313 0 0.063 0 0.063-0.063 0.125-1.375 0.813-2.063 1.188-2.063 1.188-0.125 0-0.375-0.25-0.813-0.813-0.375-0.5-0.688-0.875-0.813-1.125-0.25 0.063-0.438 0.063-0.5 0.063-0.125 0-0.313 0-0.5-0.063-0.188 0.25-0.5 0.625-0.875 1.125-0.438 0.563-0.688 0.813-0.813 0.813 0 0-0.688-0.375-2.063-1.188 0-0.063-0.063-0.063-0.063-0.125 0-0.25 0.313-1.063 0.875-2.313-0.188-0.25-0.375-0.563-0.5-0.875-1.688-0.125-2.5-0.313-2.5-0.5v-2.313c0-0.188 0.813-0.375 2.5-0.5 0.125-0.375 0.313-0.625 0.5-0.875-0.563-1.25-0.875-2.063-0.875-2.313 0-0.063 0.063-0.063 0.063-0.125 0.063 0 0.25-0.125 0.625-0.313 0.313-0.25 0.625-0.438 0.938-0.563 0.313-0.188 0.5-0.313 0.5-0.313 0.125 0 0.375 0.25 0.813 0.813 0.375 0.5 0.688 0.875 0.875 1.125 0.188-0.063 0.375-0.063 0.5-0.063 0.063 0 0.25 0 0.5 0.063 0.563-0.813 1.063-1.438 1.5-1.875l0.125-0.063c0 0 0.688 0.438 2.063 1.188 0.063 0.063 0.063 0.063 0.063 0.125 0 0.25-0.313 1.063-0.875 2.313 0.188 0.25 0.375 0.5 0.5 0.875 1.688 0.125 2.5 0.313 2.5 0.5z" />
    </svg>
  );
};
export default GearsSettingIcon;