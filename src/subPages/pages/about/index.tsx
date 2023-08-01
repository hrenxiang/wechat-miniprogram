import { Image, Text, View } from "@tarojs/components";
import IconFont from "../../../assets/iconfont/index.weapp";
import { NavBar } from "@antmjs/vantui"
import Taro from "@tarojs/taro";
import "./index.css";

const About = () => {
  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;

  const handlerCopy = (param: string) => {
    Taro.setClipboardData({
      data: param,
      complete: () => {
        Taro.showToast({
          title: "已复制"
        })
      },
      success: () => {

      }
    })
  }

  return (
    <View className="about-container">
      <NavBar
        title="关于我们"
        leftArrow
        onClickLeft={() => Taro.navigateBack()}
        fixed={true}
        className="custom_header"
      />
      <View className="about_first" style={`paddingTop: ${paddingTopNum + 30}px; marginTop: 1rem`}>
        <Image src="https://huangrx.cn/img/about-rose.jpg" className="about_first_image" />
        <Text className="about_first_name">茜茜和阿黄的恋爱小屋</Text>
        <Text className="about_first_version">version 2.0.0</Text>
      </View>
      <View className="about_items">
        <View className="about_item">
          <View className="about_item_left">
            <Text className="about_item_left_title">官方网站</Text>
            <Text className="about_item_left_content">https://www.huangrx.cn</Text>
          </View>
          <IconFont name="arrow-right" size="48" color="black"></IconFont>
        </View>
        <View className="about_item" onClick={() => { handlerCopy("huang.rx.life@hotmail.com") }}>
          <View className="about_item_left">
            <Text className="about_item_left_title">我的邮箱</Text>
            <Text className="about_item_left_content">huang.rx.life@hotmail.com</Text>
          </View>
          <Text>点击复制</Text>
        </View>
        <View className="about_item" onClick={() => { handlerCopy("***********") }}>
          <View className="about_item_left">
            <Text className="about_item_left_title">我的微信</Text>
            <Text className="about_item_left_content">***********</Text>
          </View>
          <Text>点击复制</Text>
        </View>
        <View className="about_item" onClick={() => { handlerCopy("***********") }}>
          <View className="about_item_left">
            <Text className="about_item_left_title">我的电话</Text>
            <Text className="about_item_left_content">***********</Text>
          </View>
          <IconFont name="arrow-right" size="48" color="black"></IconFont>
        </View>
      </View>
    </View>
  )
}

export default About;