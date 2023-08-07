/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconVisibility = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 682.667c-104.676 0-199.51-58.71-284.33-176.128C314.595 396.402 409.315 341.333 512 341.333c104.676 0 199.566 56.89 284.444 170.667C711.566 625.778 616.676 682.667 512 682.667z m0-56.89a113.778 113.778 0 1 0 0-227.555 113.778 113.778 0 0 0 0 227.556z m0-56.888a56.889 56.889 0 1 1 0-113.778 56.889 56.889 0 0 1 0 113.778z"
        fill={getIconColor(color, 0, '#2C2C2C')}
      />
    </svg>
  );
};

IconVisibility.defaultProps = {
  size: 18,
};

export default IconVisibility;
