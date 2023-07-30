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

const IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'food':
      return <IconFood {...rest} />;
    case 'temperature':
      return <IconTemperature {...rest} />;
    case 'clothes':
      return <IconClothes {...rest} />;
    case 'city':
      return <IconCity {...rest} />;
    case 'weather-suggest':
      return <IconWeatherSuggest {...rest} />;
    case 'calendar':
      return <IconCalendar {...rest} />;
    case 'weather':
      return <IconWeather {...rest} />;
    case 'message':
      return <IconMessage {...rest} />;
    case 'flower':
      return <IconFlower {...rest} />;

  }

  return null;
};

export default IconFont;
