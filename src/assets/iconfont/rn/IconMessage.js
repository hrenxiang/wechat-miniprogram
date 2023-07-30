/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconMessage = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M615.9 892.8c-6.5 0-13-1.4-19-4.2-15.8-7.4-25.8-23.2-25.8-40.6v-89.6H154.3c-37.4 0-67.9-30.1-67.9-67.2V198.4c0-37.1 30.4-67.2 67.9-67.2h715.4c37.4 0 67.9 30.1 67.9 67.2v492.8c0 37.1-30.4 67.2-67.9 67.2h-76.1l-149.1 124c-8.2 6.9-18.4 10.4-28.6 10.4zM176 668.8h439.9c24.7 0 44.8 20.1 44.8 44.8v38.9l88.1-73.3c8-6.7 18.2-10.4 28.7-10.4H848v-448H176v448z"
        fill={getIconColor(color, 0, '#1A1A1A')}
      />
      <Path
        d="M288 355.2h268.8v89.6H288z m358.4 0H736v89.6h-89.6z"
        fill={getIconColor(color, 1, '#1A1A1A')}
      />
    </Svg>
  );
};

IconMessage.defaultProps = {
  size: 18,
};

IconMessage = React.memo ? React.memo(IconMessage) : IconMessage;

export default IconMessage;
