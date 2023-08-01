import { View, Switch, Text } from "@tarojs/components";
import { NavBar } from "@antmjs/vantui"
import "./index.css";
import Taro from "@tarojs/taro";
import { useState } from "react";

const Setting = () => {
  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;
  const [value, setValue] = useState<boolean>(false)
  return (
    <View>
      <NavBar
        title="设置"
        leftArrow
        onClickLeft={() => Taro.navigateBack()}
        fixed={true}
        className="custom_header"
      />
      <View className="setting_container" style={`paddingTop: ${paddingTopNum + 30}px; marginTop: 1rem`}>
        <View className="setting_items">
          <View className="setting_item">
            <View className="setting_item_left">
              <Text className="setting_item_left_title">主题模式</Text>
              <Text className="setting_item_left_content">切换后将切换程序主题颜色</Text>
            </View>
            <Switch className="setting_item_right" color="rgb(242, 190, 209)" checked={value} onChange={() => setValue(!value)} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Setting;