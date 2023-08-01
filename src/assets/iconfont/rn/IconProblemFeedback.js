/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconProblemFeedback = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M819.2 102.4H204.8a102.4 102.4 0 0 0-102.4 102.4v614.4a102.4 102.4 0 0 0 102.4 102.4h614.4a102.4 102.4 0 0 0 102.4-102.4V204.8a102.4 102.4 0 0 0-102.4-102.4z m0 665.6a51.2 51.2 0 0 1-51.2 51.2H256a51.2 51.2 0 0 1-51.2-51.2V256a51.2 51.2 0 0 1 51.2-51.2h512a51.2 51.2 0 0 1 51.2 51.2zM512 256a148.48 148.48 0 0 0-153.6 153.6h102.4s4.608-51.2 51.2-51.2a51.2 51.2 0 0 1 51.2 51.2c0 47.104-102.4 73.728-102.4 153.6v51.2h102.4v-51.2c0-48.128 102.4-64 102.4-153.6A140.8 140.8 0 0 0 512 256z m25.6 409.6h-51.2a25.6 25.6 0 0 0-25.6 25.6v51.2a25.6 25.6 0 0 0 25.6 25.6h51.2a25.6 25.6 0 0 0 25.6-25.6v-51.2a25.6 25.6 0 0 0-25.6-25.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconProblemFeedback.defaultProps = {
  size: 18,
};

IconProblemFeedback = React.memo ? React.memo(IconProblemFeedback) : IconProblemFeedback;

export default IconProblemFeedback;
