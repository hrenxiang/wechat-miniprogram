import { View, Button, Image, Input, Text } from "@tarojs/components"
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react"
import { UserProfile } from "../../type/user"

import "./index.css";

const WxAvatarAndName = () => {
  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;
  const [avatarUrl, setAvatarUrl] = useState<string>("https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0")
  const [nickname, setNickName] = useState<string>("")
  const [userProfile, setUserProfile] = useState<UserProfile>({avatar: '', nickname: ''})
  const onChooseAvatar = (e) => {
    const { avatarUrl } = e.detail
    setAvatarUrl(avatarUrl)
    setUserProfile({
      avatar: avatarUrl,
      nickname: userProfile.nickname
    })
  }
  const handleNicknameChange = (e) => {
    setNickName(e.detail.value);
    setUserProfile({
      avatar: userProfile.avatar,
      nickname: e.detail.value
    })
  };
  const cancel = () => {
    Taro.reLaunch({
      url: "/subPages/pages/home/index"
    });
  }
  const accredit = () => {
    Taro.setStorage({
      key: "UserProfile",
      data: JSON.stringify(userProfile)
    })

    Taro.reLaunch({
      url: "/subPages/pages/my/index"
    });
  }

  useEffect(() => {

    // // 获取用户登录凭证code，并发送请求获取openid
    // Taro.login({
    //   success: async (res) => {
    //     if (res.code) {
    //       // 发送请求获取openid
    //       // const response = await get("http://localhost:8080/user/jscode2session", {code: res.code})
    //       // const openid = response.data.openid;
    //       console.log('用户的openid:', res.code);
    //     } else {
    //       console.log('获取用户登录态失败！', res.errMsg);
    //     }
    //   },
    //   fail: (err) => {
    //     console.log('登录失败！', err);
    //   },
    // });
  }, [])

  return (
    <View className="wx_acquire_container">

      <View className="wx_acquire_body" style={`paddingTop: ${paddingTopNum + 30}px;  marginTop: 1rem`}>
        <Text className="wx_acquire_title">获取用户头像及昵称</Text>
        <Button className="wx_acquire_Button" openType="chooseAvatar" onChooseAvatar={onChooseAvatar}>
          <Image className="wx_acquire_avatar" src={avatarUrl}></Image>
          <Text>请选择</Text>
        </Button>
        <View className="wx_acquire_nickname">
          <Text>昵称：</Text>
          <Input type="nickname" value={nickname} onInput={handleNicknameChange} placeholder="请输入昵称" />
        </View>
        <View>
        </View>
        <View className="wx_acquire_bottom">
          <Button className="wx_acquire_cancel" onClick={cancel}>取消</Button>
          <Button className="wx_acquire_confirm" onClick={accredit}>授权</Button>
        </View>
      </View>

    </View>
  )
}

export default WxAvatarAndName;