import { Image, NavBar } from "@antmjs/vantui";
import { Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.css";

const Notice = () => {
  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;
  return (
    <View>
      <NavBar
        title="公告板 🔉"
        leftArrow
        onClickLeft={() => Taro.navigateBack()}
        fixed={true}
        className="custom_header"
      />
      <View className="notice_container" style={`paddingTop: ${paddingTopNum + 30}px; marginTop: 1rem`}>
        <View className="notice_body">
          <View className="notice_body_text">
            <Text className="notice_body_text_date">22-04-24</Text>
            <Text className="notice_body_text_content">功能正在不断地完善，如果你有好的想法，可以联系我们！</Text>
          </View>
          <View className="notice_body_image_container">
            <Image src={'https://huangrx.cn/img/expect.png'} fit="cover" width="50px" height="50px" className="notice_body_image" />
          </View>
        </View>
        <View className="notice_body">
          <View className="notice_body_text">
            <Text className="notice_body_text_date">22-04-24</Text>
            <Text className="notice_body_text_content">功能正在不断地完善，如果你有好的想法，可以联系我们！</Text>
          </View>
          <View className="notice_body_image_container">
            <Image src={'https://huangrx.cn/img/expect.png'} fit="cover" width="50px" height="50px" className="notice_body_image" />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Notice;