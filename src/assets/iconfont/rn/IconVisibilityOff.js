/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconVisibilityOff = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M494.763 457.785a56.889 56.889 0 0 1 71.85 70.144l191.83 187.335a28.444 28.444 0 1 1-39.766 40.732l-193.194-188.7a57.003 57.003 0 0 1-69.063-67.47l-177.152-173a28.444 28.444 0 0 1 39.765-40.732l175.787 171.69z m-171.236-47.957l77.767 75.89A113.778 113.778 0 0 0 540.9 622.08l50.346 49.209c-25.77 7.566-52.167 11.378-79.246 11.378-104.676 0-199.51-58.71-284.33-176.128 30.947-39.254 62.918-71.453 95.857-96.711z m105.529-55.98c27.022-8.362 54.67-12.515 82.944-12.515 104.676 0 199.566 56.89 284.444 170.667-31.687 42.496-64.853 77.028-99.27 103.652l-75.378-73.615a113.892 113.892 0 0 0-142.45-139.093l-50.29-49.095z"
        fill={getIconColor(color, 0, '#2C2C2C')}
      />
    </Svg>
  );
};

IconVisibilityOff.defaultProps = {
  size: 18,
};

IconVisibilityOff = React.memo ? React.memo(IconVisibilityOff) : IconVisibilityOff;

export default IconVisibilityOff;
