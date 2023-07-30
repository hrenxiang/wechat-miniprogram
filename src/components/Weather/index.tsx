import { View, Text } from "@tarojs/components";
import { useEffect, useState } from "react";
import { acquireWeather } from "../../api/service/ApiService";
import { WeatherData } from "../../type/weather";
import IconFont from "../../assets/iconfont/index.weapp";

import "./index.css";

const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>();

  useEffect(() => {
    acquireWeather().then((res) => {
      setWeatherData(res);
    })
  }, [])

  return (
    <View className="weather_container">
      <View className="weather_content">
        <View className="weather_row_1">
          <View className="weather_city">
            <View className="weather_item-header">
              <IconFont name="city" size="32"></IconFont>
              <Text>所在城市</Text>
            </View>
            <Text className="weather_item_body">{weatherData?.result.province} - {weatherData?.result.area}</Text>
          </View>
          <View className="weather_today">
            <View>
              <View className="weather_item-header">
                <IconFont name="weather-suggest" size="32"></IconFont>
                <Text>天气: </Text>
                <Text className="weather_item_body">{weatherData?.result.weather}</Text>
              </View>
            </View>
            <View className="weather_change">
              <View className="weather_item-header">
                <IconFont name="temperature" size="32"></IconFont>
                <Text>气温: </Text>
                <Text className="weather_item_body">{weatherData?.result.lowest}~{weatherData?.result.highest}</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="weather_row_2">
          <View className="weather_suggest">
            <View className="weather_item-header">
              <IconFont name="clothes" size="32"></IconFont>
              <Text>穿衣建议</Text>
            </View>
            <Text className="weather_item_body">{weatherData?.result.tips}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Weather;