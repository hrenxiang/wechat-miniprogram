/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconArrowRight = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M558.933 490.667L384 665.6l59.733 59.733L678.4 490.667 443.733 256 384 315.733l174.933 174.934z"
        fill={getIconColor(color, 0, '#2C2C2C')}
      />
    </svg>
  );
};

IconArrowRight.defaultProps = {
  size: 18,
};

export default IconArrowRight;
