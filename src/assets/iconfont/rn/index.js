/* eslint-disable */

import React from 'react';

import IconFood from './IconFood';
import IconTemperature from './IconTemperature';
import IconClothes from './IconClothes';
import IconCity from './IconCity';
import IconWeatherSuggest from './IconWeatherSuggest';
import IconCalendar from './IconCalendar';
import IconWeather from './IconWeather';
import IconMessage from './IconMessage';
import IconFlower from './IconFlower';
export { default as IconFood } from './IconFood';
export { default as IconTemperature } from './IconTemperature';
export { default as IconClothes } from './IconClothes';
export { default as IconCity } from './IconCity';
export { default as IconWeatherSuggest } from './IconWeatherSuggest';
export { default as IconCalendar } from './IconCalendar';
export { default as IconWeather } from './IconWeather';
export { default as IconMessage } from './IconMessage';
export { default as IconFlower } from './IconFlower';

let IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'food':
      return <IconFood key="1" {...rest} />;
    case 'temperature':
      return <IconTemperature key="2" {...rest} />;
    case 'clothes':
      return <IconClothes key="3" {...rest} />;
    case 'city':
      return <IconCity key="4" {...rest} />;
    case 'weather-suggest':
      return <IconWeatherSuggest key="5" {...rest} />;
    case 'calendar':
      return <IconCalendar key="6" {...rest} />;
    case 'weather':
      return <IconWeather key="7" {...rest} />;
    case 'message':
      return <IconMessage key="8" {...rest} />;
    case 'flower':
      return <IconFlower key="9" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
