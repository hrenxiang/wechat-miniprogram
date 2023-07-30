/* eslint-disable */
import React, { FunctionComponent } from 'react';

interface Props {
  name: 'food' | 'temperature' | 'clothes' | 'city' | 'weather-suggest' | 'calendar' | 'weather' | 'message' | 'flower';
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

declare const IconFont: FunctionComponent<Props>;

export default IconFont;
