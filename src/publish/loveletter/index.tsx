import { Button, Text, Textarea, View } from "@tarojs/components";
import { NavBar, Toast } from "@antmjs/vantui";
import Taro, { getStorageSync } from "@tarojs/taro";
import "./index.css";
import { useState } from "react";
import { saveLoveLetter } from "../../api/service/ApiService";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/reducers/RootReducer";
import GoodVibesSvg from "../../assets/svg/good-vibes.svg";

const LoveLetter = () => {
  const Toast_ = Toast.createOnlyToast();
  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;
  const [content, setContent] = useState<string>('');
  const { userProfile } = useSelector((state: IRootState) => state.user);
  const access_token = getStorageSync("ACCESS_TOKEN");

  const contentChange = (e) => {
    const newText = e.detail.value;
    setContent(newText);
  };

  const publish = () => {
    saveLoveLetter(userProfile.id, content, access_token).then((res) => {
      if (res.code === 0) {
        Taro.reLaunch({
          url: "/feature/loveletter/index"
        })
      } else {
        Toast_.show(res.message);
      }
    })
  }
  return (
    <View className="publish_letter_container" style={`paddingTop: ${paddingTopNum + 30}px; min-height: calc(100vh -  ${paddingTopNum + 30}px)`}>
      <NavBar
        leftArrow
        onClickLeft={() => Taro.navigateBack()}
        fixed={true}
        className="custom_header"
      />

      <View className="publish_letter_body">

        <View className="publish_letter_content">
          <Textarea className="publish_letter_textarea"
            placeholder="甜蜜的话更让人开心哦！"
            maxlength={500}
            placeholderStyle="fontSize: 0.8rem"
            onInput={contentChange}
          >

          </Textarea>
          <View className="publish_letter_word_num">
            <Text>{content.length}/500</Text>
          </View>
        </View>
        <Button className="publish_letter_button"  onClick={publish}>发布</Button>
        <View>
          <GoodVibesSvg style={{height: '30vh', width: '100%'}}/>
        </View>
      </View>
      <Toast_ />
    </View>
  )
}

export default LoveLetter;