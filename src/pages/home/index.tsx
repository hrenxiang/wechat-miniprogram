import NavBar from "../../component/NavBar"
import FooterBar from "../../component/FooterBar"
import { Text, View } from "@tarojs/components"

import "./index.css"
import { useState } from "react"
import { Swiper, SwiperItem, Image, Icon } from "@antmjs/vantui"


const Home = () => {
  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;

  const images = [
    'https://images.huangrx.cn/uploads/2023/04/29/1682763517220.jpg',
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
  ]

  const [initPage1] = useState(0)
  const onChange = () => { }

  const [active, setActive] = useState<string | number>(1)
  const onMenuChange = (e: number) => {
    setActive(e);
  }

  return (
    <View className="home_body">
      <NavBar />
      <View className="index_header_body" style={`paddingTop: ${paddingTopNum + 30}px; marginTop: 1rem`}>
        <Swiper
          height={200}
          paginationColor="#426543"
          autoPlay="3000"
          initPage={initPage1}
          paginationVisible
          onChange={onChange}
        >
          {images.map((item, index) => (
            <SwiperItem key={`swiper#demo1${index}`}>
              <Image src={item} fit="cover" width="100%" height="200px" />
            </SwiperItem>
          ))}
        </Swiper>
      </View>

      <View className="home_menu_items">
        <View className={`home_menu_item ${active === 1 ? "home_menu_active" : ""}`} onClick={() => onMenuChange(1)}>
          <Icon name="fire-o" className="home_menu_icon"></Icon>
          <Text className="home_menu_text">天气</Text>
        </View>
        <View className={`home_menu_item ${active === 2 ? "home_menu_active" : ""}`} onClick={() => onMenuChange(2)}>
          <Icon name="fire-o" className="home_menu_icon"></Icon>
          <Text className="home_menu_text">纪念日</Text>
        </View>
        <View className={`home_menu_item ${active === 3 ? "home_menu_active" : ""}`} onClick={() => onMenuChange(3)}>
          <Icon name="fire-o" className="home_menu_icon"></Icon>
          <Text className="home_menu_text">小情书</Text>
        </View>
      </View>

      <View className="weather_container">
        <View className="weather_content">
          <View className="weather_row_1">
            <View className="weather_city">
              <Text>所在城市：郑州金水区</Text>
            </View>
            <View className="weather_today">
              <Text>今天天气：晴朗</Text>
              <Text>气温变化：22 ~ 32</Text>
            </View>
          </View>
          <View className="weather_row_2">
            <View className="weather_suggest">
              <Text>今天建议：短袖，短裤，大拖鞋</Text>
            </View>
          </View>
        </View>
      </View>

      <FooterBar />
    </View>
  )
}

export default Home;