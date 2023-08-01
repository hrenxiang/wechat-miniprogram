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

let IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'about':
      return <IconAbout key="1" {...rest} />;
    case 'arrow-right':
      return <IconArrowRight key="2" {...rest} />;
    case 'support':
      return <IconSupport key="3" {...rest} />;
    case 'setting':
      return <IconSetting key="4" {...rest} />;
    case 'account':
      return <IconAccount key="5" {...rest} />;
    case 'agreement':
      return <IconAgreement key="6" {...rest} />;
    case 'manual-customer-service':
      return <IconManualCustomerService key="7" {...rest} />;
    case 'privacy':
      return <IconPrivacy key="8" {...rest} />;
    case 'problem-feedback':
      return <IconProblemFeedback key="9" {...rest} />;
    case 'share':
      return <IconShare key="10" {...rest} />;
    case 'food':
      return <IconFood key="11" {...rest} />;
    case 'temperature':
      return <IconTemperature key="12" {...rest} />;
    case 'clothes':
      return <IconClothes key="13" {...rest} />;
    case 'city':
      return <IconCity key="14" {...rest} />;
    case 'weather-suggest':
      return <IconWeatherSuggest key="15" {...rest} />;
    case 'calendar':
      return <IconCalendar key="16" {...rest} />;
    case 'weather':
      return <IconWeather key="17" {...rest} />;
    case 'message':
      return <IconMessage key="18" {...rest} />;
    case 'flower':
      return <IconFlower key="19" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
