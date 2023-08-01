import { Button, View } from "@tarojs/components"
import Taro from "@tarojs/taro";

import "./index.css"

const Index = () => {
  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;
  
  const handlerStart = () => {
    Taro.reLaunch({
      url: "/subPages/pages/home/index"
    })
  }

  return (
    <View className="index_body">
      <View style={`paddingTop: ${paddingTopNum + 30}px`}>
        <Button className="index_button" onClick={handlerStart}>Get Start !</Button>
      </View>

    </View>
  )
}

export default Index;