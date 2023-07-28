import { View, Text } from "@tarojs/components";
import "./index.css";

const NavBar = () => {

  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;

  return (
    <View className="navbar_view" style={`paddingTop: ${paddingTopNum}px; height: 30px; paddingBottom: 1rem`}>
      <Text className="lilita-text">Love Cottage 🏡</Text>
    </View>
  )
}

export default NavBar;