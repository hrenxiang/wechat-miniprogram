/* eslint-disable */

import React from 'react';
import IconAbout from './IconAbout';
import IconArrowRight from './IconArrowRight';
import IconSupport from './IconSupport';
import IconSetting from './IconSetting';
import IconAccount from './IconAccount';
import IconAgreement from './IconAgreement';
import IconManualCustomerService from './IconManualCustomerService';
import IconPrivacy from './IconPrivacy';
import IconProblemFeedback from './IconProblemFeedback';
import IconShare from './IconShare';
import IconFood from './IconFood';
import IconTemperature from './IconTemperature';
import IconClothes from './IconClothes';
import IconCity from './IconCity';
import IconWeatherSuggest from './IconWeatherSuggest';
import IconCalendar from './IconCalendar';
import IconWeather from './IconWeather';
import IconMessage from './IconMessage';
import IconFlower from './IconFlower';
export { default as IconAbout } from './IconAbout';
export { default as IconArrowRight } from './IconArrowRight';
export { default as IconSupport } from './IconSupport';
export { default as IconSetting } from './IconSetting';
export { default as IconAccount } from './IconAccount';
export { default as IconAgreement } from './IconAgreement';
export { default as IconManualCustomerService } from './IconManualCustomerService';
export { default as IconPrivacy } from './IconPrivacy';
export { default as IconProblemFeedback } from './IconProblemFeedback';
export { default as IconShare } from './IconShare';
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
    case 'about':
      return <IconAbout {...rest} />;
    case 'arrow-right':
      return <IconArrowRight {...rest} />;
    case 'support':
      return <IconSupport {...rest} />;
    case 'setting':
      return <IconSetting {...rest} />;
    case 'account':
      return <IconAccount {...rest} />;
    case 'agreement':
      return <IconAgreement {...rest} />;
    case 'manual-customer-service':
      return <IconManualCustomerService {...rest} />;
    case 'privacy':
      return <IconPrivacy {...rest} />;
    case 'problem-feedback':
      return <IconProblemFeedback {...rest} />;
    case 'share':
      return <IconShare {...rest} />;
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
