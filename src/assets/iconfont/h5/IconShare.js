/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconShare = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M397.184 642.112a192 192 0 1 1-10.144-270.464L554.592 262.4a144 144 0 1 1 36.8 52.416l-165.44 107.84c14.08 26.72 22.016 57.12 22.016 89.376a191.36 191.36 0 0 1-15.808 76.384L673.216 724a144 144 0 1 1-28.992 57.12L397.152 642.144z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconShare.defaultProps = {
  size: 18,
};

export default IconShare;
