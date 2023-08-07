import { View, Button, Image, Input, Text } from "@tarojs/components"
import Taro from "@tarojs/taro";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store/reducers/RootReducer";
import { saveUser } from "../../api/service/ApiService";
import { RoleType, UserInfoParam } from "../../type/user"

import "./index.css";
import { setUserProfile } from "../../store/action/UserActions";
import { BASE_URL } from "../../api/service/ApiService";

const WxAvatarAndName = () => {
  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;
  const [userInfoParam, setUserInfoParam] = useState<UserInfoParam>({
    avatar: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
    nickname: '',
    openid: ''
  })

  const { openid } = useSelector((state: IRootState) => state.user);
  const dispatch = useDispatch();

  const onChooseAvatar = (e) => {
    const { avatarUrl } = e.detail
    setUserInfoParam((prev) => ({
      ...prev,
      avatar: avatarUrl
    }));
  }
  const handleNicknameChange = (e) => {
    setUserInfoParam((prev) => ({
      ...prev,
      nickname: e.detail.value
    }));
  };
  const cancel = () => {
    Taro.reLaunch({
      url: "/subpage/home/index"
    });
  }
  const accredit = () => {
    Taro.uploadFile({
      url: `${BASE_URL}/user/wx/upload`, //仅为示例，非真实的接口地址
      filePath: userInfoParam.avatar,
      name: 'file',
      formData: {
        'user': 'test'
      },
      success(res) {
        const response = JSON.parse(res.data)
        const updatedUserInfo = {
          ...userInfoParam,
          avatar: response.data,
          openid: openid
        };
        saveUser(updatedUserInfo).then((res) => {
          if (res.code === 0) {
            dispatch(
              setUserProfile({
                avatar: response.data,
                nickname: userInfoParam.nickname,
                mobile: '',
                role: RoleType.GUEST,
                openid: openid,
                id: res.data
              })
            );

            Taro.reLaunch({
              url: "/subpage/my/index"
            });
          }
        })
      }
    })
  }

  return (
    <View className="wx_acquire_container">

      <View className="wx_acquire_body" style={`paddingTop: ${paddingTopNum + 30}px;  marginTop: 1rem`}>
        <Text className="wx_acquire_title">获取用户头像及昵称</Text>
        <Button className="wx_acquire_Button" openType="chooseAvatar" onChooseAvatar={onChooseAvatar}>
          <Image className="wx_acquire_avatar" src={userInfoParam.avatar}></Image>
          <Text>请选择</Text>
        </Button>
        <View className="wx_acquire_nickname">
          <Text>昵称：</Text>
          <Input type="nickname" value={userInfoParam.nickname} onInput={handleNicknameChange} placeholder="请输入昵称" />
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