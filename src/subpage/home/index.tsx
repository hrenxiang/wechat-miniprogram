import NavBar from "../../components/NavBar"
import FooterBar from "../../components/FooterBar"
import { Text, Button, View } from "@tarojs/components"

import "./index.css"
import { useState } from "react"
import { Swiper, SwiperItem, Image } from "@antmjs/vantui"
import Weather from "../../components/Weather"
import IconFont from "../../assets/iconfont/index.weapp";
import Taro from "@tarojs/taro"

const Home = () => {
  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;

  const images = [
    'https://huangrx.cn/img/mini-program-banner-4.jpg',
    'https://huangrx.cn/img/mini-program-banner-3.jpg',
    'https://huangrx.cn/img/mini-program-banner-2.jpg',
    'https://huangrx.cn/img/mini-program-banner-1.jpg',
  ]

  const onMenuChange = (param: number) => {
    Taro.navigateTo({
      url: param === 1 ? "/feature/daily/index" : param === 2 ? "/feature/memorial/index" : "/feature/loveletter/index"
    })
  }

  const [initPage1] = useState(0)
  const onChange = () => { }

  const showAllNotice = () => {
    Taro.navigateTo({
      url: "/subpage/notice/index"
    });
  }

  return (
    <>
      <NavBar />
      <View className="home_body">
        <View className="home_header_body" style={`paddingTop: ${paddingTopNum + 30}px; marginTop: 1rem`}>
          <Swiper
            height={200}
            paginationColor="#426543"
            autoPlay="3000"
            initPage={initPage1}
            paginationVisible
            onChange={onChange}
            style={{ borderRadius: '1rem' }}
          >
            {images.map((item, index) => (
              <SwiperItem key={`swiper#demo1${index}`}>
                <Image src={item} fit="cover" width="100%" height="200px" />
              </SwiperItem>
            ))}
          </Swiper>
        </View>

        <View className="home_menu_items">
          <View className="home_menu_item" onClick={() => onMenuChange(3)}>
            <IconFont name="message" size="48" color="white"></IconFont>
            <Text className="home_menu_text">小情书</Text>
          </View>
          <View className="home_menu_item" onClick={() => onMenuChange(2)}>
            <IconFont name="calendar" size="48" color="white"></IconFont>
            <Text className="home_menu_text">纪念日</Text>
          </View>
          <View className="home_menu_item" onClick={() => onMenuChange(1)}>
            <IconFont name="food" size="48"  color="white"></IconFont>
            <Text className="home_menu_text">日常呀</Text>
          </View>
        </View>

        <Weather />

        <View className="home_notice_container">
            <View className="home_notice_header">
              <Text className="home_notice_header_title">公告板</Text>
              <Button className="home_notice_header_button" onClick={showAllNotice}>查看全部</Button>
            </View>
            <View className="home_notice_body">
              <View className="home_notice_body_text">
                <Text className="home_notice_body_text_date">22-04-24</Text>
                <Text className="home_notice_body_text_content">功能正在不断地完善，如果你有好的想法，可以联系我们！</Text>
              </View>
              <View className="home_notice_body_image_container">
              <Image src={'https://huangrx.cn/img/expect.png'} fit="cover" width="50px" height="50px" className="home_notice_body_image"/>
              </View>
            </View>
            <View className="home_notice_body">
              <View className="home_notice_body_text">
                <Text className="home_notice_body_text_date">22-04-24</Text>
                <Text className="home_notice_body_text_content">功能正在不断地完善，如果你有好的想法，可以联系我们！</Text>
              </View>
              <View className="home_notice_body_image_container">
              <Image src={'https://huangrx.cn/img/expect.png'} fit="cover" width="50px" height="50px" className="home_notice_body_image"/>
              </View>
            </View>
        </View>
      </View>
      <FooterBar />
    </>
  )
}

export default Home;