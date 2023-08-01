/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconAgreement = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M621.653 96a32 32 0 0 1 0 64H257.58A97.579 97.579 0 0 0 160 257.579V766.42A97.579 97.579 0 0 0 257.579 864h507.264a97.579 97.579 0 0 0 97.578-97.152L864 409.92a32 32 0 0 1 64 0.277l-1.579 356.928A161.579 161.579 0 0 1 764.843 928H257.579A161.579 161.579 0 0 1 96 766.421V257.58A161.579 161.579 0 0 1 257.579 96h364.074z"
        fill={getIconColor(color, 0, '#111111')}
      />
      <Path
        d="M753.259 113.557L455.552 409.6a64 64 0 0 0-18.88 45.376v53.845a67.243 67.243 0 0 0 65.77 67.243l50.987 1.11a64 64 0 0 0 45.739-17.814l303.659-291.413a107.947 107.947 0 0 0 3.242-152.491l-1.45-1.493a107.03 107.03 0 0 0-151.339-0.427z m106.538 46.144a43.947 43.947 0 0 1-1.322 62.08L554.88 513.195l-51.008-1.131a3.243 3.243 0 0 1-3.179-3.243v-53.845L798.38 158.933a43.03 43.03 0 0 1 58.112-2.346l3.306 3.114z"
        fill={getIconColor(color, 1, '#111111')}
      />
      <Path
        d="M772.33 154.859l94.678 95.274-45.397 45.099-94.678-95.253z"
        fill={getIconColor(color, 2, '#111111')}
      />
    </Svg>
  );
};

IconAgreement.defaultProps = {
  size: 18,
};

IconAgreement = React.memo ? React.memo(IconAgreement) : IconAgreement;

export default IconAgreement;
