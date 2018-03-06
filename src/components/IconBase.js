import React from 'react';
import PropTypes from 'prop-types';

const IconBase = ({children, width, height, style = {}, ...props}) => (
  <svg
    children={children}
    fill="currentColor"
    preserveAspectRatio="xMidYMid meet"
    height={height}
    width={width}
    style={style}
    {...props}
  />
);

IconBase.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.object,
};

export default IconBase;
