import { get, post } from "../Api"

const TIAN_API_KEY = "2d996e30eeaa6836ae58c17d06713bfa";

export const acquireWeather = () => {
  return post(
    'https://apis.tianapi.com/tianqi/index',
    {
      "key": `${TIAN_API_KEY}`,
      "city": "101180112",
      "type": "1"
    },
    {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  );
}

export const acquireLoveLetter = () => {
  return get(
    'https://apis.tianapi.com/saylove/index',
    {
      "key": `${TIAN_API_KEY}`
    }
  );
}