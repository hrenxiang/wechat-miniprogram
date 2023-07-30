import NavBar from "../../../components/NavBar";
import FooterBar from "../../../components/FooterBar";
import { View, Text } from "@tarojs/components"
import "./index.css";

const Message = () => {
  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;
  return (
      <View className="message_container">
        <NavBar/>
        <View className="message_content" style={`paddingTop: ${paddingTopNum + 30}px;  marginTop: 1rem`}>
        <View>
          <Text>正在开发中。。。</Text>
        </View>
      </View>
        <FooterBar/>
      </View>
      

  )
}

export default Message;