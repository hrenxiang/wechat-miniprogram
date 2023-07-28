import { Button, Text, View } from "@tarojs/components"
import Taro from "@tarojs/taro";
import IndexSvg from "../../assets/svg/index.svg";

import "./index.css"


const Index = () => {
  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;

  const clickStart = () => {
    Taro.reLaunch({
      url: "/pages/home/index"
    })
  }

  return (
    <View className="index_body">
      <View style={`paddingTop: ${paddingTopNum + 30}px`}>
        <View className="index_svg_container">
          <IndexSvg style={{width: "80%", height: "100%"}}/>
        </View>
        <View className="index_text_container">
          <Text className="index_text_one">世界上所有的相遇</Text>
          <Text className="index_text_two">都是久别重逢</Text>
          <Text className="index_text_three">愿岁月可回首，且以深情共白头。余生还长，请多多指教。</Text>
        </View>
        <Button className="index_button" onClick={clickStart}>Get Start !</Button>
      </View>

    </View>
  )
}

export default Index;