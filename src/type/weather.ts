export interface WeatherData {
  code: number;
  msg: string;
  result: WeatherResult;
}

export interface WeatherResult {
  date: string;
  week: string;
  province: string;
  area: string;
  areaid: string;
  weather: string;
  weatherimg: string;
  weathercode: string;
  real: string;
  lowest: string;
  highest: string;
  wind: string;
  windspeed: string;
  windsc: string;
  sunrise: string;
  sunset: string;
  moonrise: string;
  moondown: string;
  pcpn: string;
  uv_index: string;
  aqi?: string;
  quality?: string;
  vis: string;
  humidity: string;
  alarmlist?: WeatherAlarm[];
  tips: string;
}

export interface WeatherAlarm {
  province: string;
  city: string;
  level: string;
  type: string;
  content: string;
  time: string;
}