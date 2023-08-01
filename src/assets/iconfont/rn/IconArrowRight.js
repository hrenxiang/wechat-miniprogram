/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconArrowRight = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M558.933 490.667L384 665.6l59.733 59.733L678.4 490.667 443.733 256 384 315.733l174.933 174.934z"
        fill={getIconColor(color, 0, '#2C2C2C')}
      />
    </Svg>
  );
};

IconArrowRight.defaultProps = {
  size: 18,
};

IconArrowRight = React.memo ? React.memo(IconArrowRight) : IconArrowRight;

export default IconArrowRight;
