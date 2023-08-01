import { Button, Image, Text, View } from "@tarojs/components";
import { NavBar } from "@antmjs/vantui"
import Taro from "@tarojs/taro";
import "./index.css";
import { useEffect } from "react";
import { UserProfile } from "../../../type/user";
import { useState } from "react";
import WxAvatarAndName from "../../../components/WxAvatarAndName";
import IconFont from "../../../assets/iconfont/index.weapp";

const Account = () => {
  const [acquireUserProfile, setAcquireUserProfile] = useState<boolean>();
  const [userProfile, setUserProfile] = useState<UserProfile>({ avatar: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0', nickname: '西瓜君' })
  useEffect(() => {
    Taro.getStorage({
      key: 'UserProfile',
      success: (res) => {
        if (res.errMsg === "getStorage:ok") {
          setUserProfile(JSON.parse(res.data))
          setAcquireUserProfile(false)
        } else {
          setAcquireUserProfile(true)
        }
      },
      fail: () => {
        setAcquireUserProfile(true)
      }
    })
  }, [])

  const handlerBind = () => {
    Taro.navigateTo({
      url: '/subPages/pages/register/index'
    });
  }

  return (
    <View>
      {
        acquireUserProfile ?
          <WxAvatarAndName />
          :
          <View>
            <NavBar
              leftArrow
              onClickLeft={() => Taro.navigateBack()}
              fixed={true}
              className="account_header"
            />
            <View className="account_container">
              <View className="account_top">
                <View className="account_top_content"></View>
              </View>
              <View className="account_center">
                <Image src={userProfile.avatar} className="account_center_image" />
                <Text className="account_center_nickname">{userProfile.nickname}</Text>
              </View>
              <View className="account_bottom">
                <Text>您还未绑定手机号，绑定将尊享更多功能。</Text>
                <Button onClick={handlerBind}>
                  <Text>立即绑定</Text>
                  <IconFont name="arrow-right" size="48" color="white"></IconFont>
                </Button>
              </View>
            </View>
          </View>
      }
    </View>
  )
}

export default Account;