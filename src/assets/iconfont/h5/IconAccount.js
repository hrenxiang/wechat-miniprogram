/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconAccount = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M605.556 972.986h-183.11c-178.082 0-318.79 0-318.79-97.838v-17.78c0-172.591 142.988-313.019 318.79-313.019h183.11c175.663 0 318.65 140.428 318.65 313.018v17.827c-0.046 97.792-147.688 97.792-318.65 97.792z m-183.11-358.819c-137.262 0-248.971 109.103-248.971 243.2v17.827c0 28.02 168.122 28.02 248.972 28.02h183.11c61.532 0 248.831 0 248.831-28.02v-17.827c0-134.097-111.616-243.2-248.832-243.2h-183.11z m82.293-71.773c-140.381 0-254.604-112.267-254.604-250.182S364.358 42.031 504.74 42.031s254.604 112.22 254.604 250.181S645.12 542.394 504.739 542.394zM320 292.212c0 99.421 82.897 180.364 184.785 180.364s184.786-80.896 184.786-180.364S606.673 111.85 504.785 111.85 320 192.79 320 292.212z"
        fill={getIconColor(color, 0, '#231815')}
      />
    </svg>
  );
};

IconAccount.defaultProps = {
  size: 18,
};

export default IconAccount;
