/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconCity = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M581.536 328.416a16 16 0 0 0 0 32h230.336v98.256a16 16 0 0 0 32 0V272.816a16 16 0 0 0-16-16h-43.264a89.568 89.568 0 0 0-63.904-46.864V176a16 16 0 0 0-32 0v33.968a89.568 89.568 0 0 0-63.872 46.848H581.52a16 16 0 0 0 0 32h53.68a15.776 15.776 0 0 0 15.184-11.968c0.128-0.288 0.384-0.464 0.496-0.752 8.688-21.344 29.856-35.68 53.824-35.68 24.448 0 45.968 14.944 54.304 36.928a15.52 15.52 0 0 0 3.84 5.696 15.728 15.728 0 0 0 12.064 5.792h36.976v39.584H581.536z"
        fill={getIconColor(color, 0, '#0F13AE')}
      />
      <path
        d="M312 312.88h271.04V944H312zM712 512h232v432H712z"
        fill={getIconColor(color, 1, '#95EAFF')}
      />
      <path
        d="M285.584 307.344a16 16 0 0 0-32 0v632.352a16 16 0 0 0 32 0V307.344zM784 601.232a16 16 0 0 0-32 0v54.464a16 16 0 0 0 32 0v-54.464z m0 160a16 16 0 0 0-32 0v54.464a16 16 0 0 0 32 0v-54.464z"
        fill={getIconColor(color, 2, '#49A3FE')}
      />
      <path
        d="M575.392 288h-304.8a16 16 0 0 0 0 32h288.8v94.64H346.496a16 16 0 0 0 0 32h212.896v96H282.496a16 16 0 0 0 0 32h276.896v96H282.496a16 16 0 0 0 0 32h276.896v250.896a16 16 0 0 0 32 0V304a16 16 0 0 0-16-16z"
        fill={getIconColor(color, 3, '#49A3FE')}
      />
      <path
        d="M508.32 798.64H282.496a16 16 0 0 0 0 32H508.32a16 16 0 0 0 0-32z"
        fill={getIconColor(color, 4, '#49A3FE')}
      />
      <path
        d="M832 585.232a16 16 0 0 0-16 16v54.464a16 16 0 0 0 32 0v-54.464a16 16 0 0 0-16-16z m0 160a16 16 0 0 0-16 16v54.464a16 16 0 0 0 32 0v-54.464a16 16 0 0 0-16-16z"
        fill={getIconColor(color, 5, '#0F13AE')}
      />
      <path
        d="M973.888 941.84h-34.976a15.84 15.84 0 0 0 1.168-5.776V519.856a16 16 0 0 0-16-16h-240a16 16 0 0 0-16 16v422h-462.4V385.968a16 16 0 0 0-32 0V941.84h-46.976v-593.2l211.408-157.696V288h32V65.392a16 16 0 0 0-32 0v85.632L101.136 327.792a16 16 0 0 0-6.432 12.832v601.232H50.112a16 16 0 0 0 0 32h923.776a16 16 0 0 0 0-32.016z m-273.808 0.016v-406h208V936.08a15.84 15.84 0 0 0 1.168 5.776H700.08z"
        fill={getIconColor(color, 6, '#0F13AE')}
      />
    </svg>
  );
};

IconCity.defaultProps = {
  size: 18,
};

export default IconCity;
