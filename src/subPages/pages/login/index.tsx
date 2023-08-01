import { View } from "@tarojs/components";
import { NavBar } from "@antmjs/vantui"
import Taro from "@tarojs/taro";
import "./index.css";

const Login = () => {
  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;
  return (
    <View>
      <NavBar
        leftText="返回"
        leftArrow
        onClickLeft={() => Taro.navigateBack()}
        fixed={true}
        className="custom_header"
      />
      <View className="login_container" style={`paddingTop: ${paddingTopNum + 30}px; marginTop: 1rem`}>
        
      </View>
    </View>
  )
}

export default Login;