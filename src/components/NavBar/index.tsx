import { View, Text } from "@tarojs/components";
import IconFont from "../../assets/iconfont/index.weapp";
import "./index.css";

const NavBar = () => {

  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;

  return (
    <View className="navbar_view" style={`paddingTop: ${paddingTopNum}px; height: 30px; paddingBottom: 1rem`}>
      <View className="navbar_title">
        <Text className="lilita-text">Love Cottage</Text>
        <IconFont name="flower" size="48"></IconFont>
      </View>
    </View>
  )
}

export default NavBar;