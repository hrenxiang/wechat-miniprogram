import NavBar from "../../components/NavBar";
import FooterBar from "../../components/FooterBar";
import { View, Text, Image, Button } from "@tarojs/components";
import { Overlay } from "@antmjs/vantui";
import "./index.css";
import WxAvatarAndName from "../../components/WxAvatarAndName";
import { useState } from "react";
import Taro, { getStorageSync, removeStorageSync } from "@tarojs/taro";
import { RoleType } from "../../type/user";
import IconFont from "../../assets/iconfont/index.weapp";
import { useShareAppMessage } from "@tarojs/taro";
import { logout } from "../../api/service/ApiService";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/reducers/RootReducer";

const my = () => {
  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;

  const [support, setSupport] = useState<boolean>(false);

  const { userProfile } = useSelector((state: IRootState) => state.user);

  const access_token = getStorageSync("ACCESS_TOKEN");

  const onMenuChange = (param: string) => {
    Taro.navigateTo({
      url: param
    })
  }

  const onContact = (e) => {
    console.log(e)
  }

  useShareAppMessage((res) => {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      // console.log(res.target)
    }
    return {
      title: '爱情小屋子',
      path: '/pages/index/index',
    }
  })

  const handlerNNavigate = (path: string) => {
    Taro.navigateTo({
      url: path
    })
  }

  const handlerLogout = () => {
    logout(access_token).then((res) => {
      if (res.code === 0 && res.data === true) {
        console.log("退出成功！")
      }

      removeStorageSync("ACCESS_TOKEN");
      removeStorageSync("REFRESH_TOKEN");

      Taro.reLaunch({
        url: "/subpage/my/index"
      })
    })
  }

  return (
    <View>
      {
        !userProfile.openid ?
          <WxAvatarAndName />
          :
          <View>
            <NavBar />
            <View className="my_container">
              <View className="my_content" style={`paddingTop: ${paddingTopNum + 30}px;  marginTop: 1rem`}>
                <View className="my_header">
                  <View className="my_header_info">
                    <View className="my_header_left">
                      <Image src={userProfile.avatar} className="my_header_image" />
                      <View className="my_header_left_content">
                        <Text className="my_header_nickname">{userProfile.nickname}</Text>
                        {
                          access_token ?
                            <Text className="my_header_role">{userProfile.role === RoleType.ADMIN ? "管理员" : "游客"}</Text>
                            :
                            ""
                        }
                      </View>
                    </View>

                    {
                      access_token ?
                        <View className="my_header_right">
                          <Button className="my_header_login" onClick={handlerLogout}>退出</Button>
                        </View>
                        :
                        userProfile.mobile ?
                          <View className="my_header_right">
                            <Button className="my_header_login" onClick={() => { handlerNNavigate("/user/login/index") }}>登录</Button>
                          </View>
                          :
                          <View className="my_header_right">
                            <Button className="my_header_login" onClick={() => { handlerNNavigate("/user/register/index") }}>绑定</Button>
                          </View>
                    }

                  </View>
                  <View>
                    <View className="my_content_header_menu_items">
                      <Button className="my_content_header_menu_item my_content_header_menu_button" openType="feedback">
                        <IconFont name="problem-feedback" size="72" color="white"></IconFont>
                        <Text className="my_content_header_menu_text">问题反馈</Text>
                      </Button>
                      <Button className="my_content_header_menu_item my_content_header_menu_button" onClick={() => setSupport(!support)}>
                        <IconFont name="support" size="72" color="white"></IconFont>
                        <Text className="my_content_header_menu_text">赞赏支持</Text>
                        <Overlay show={support} >
                          <View className="my_content_header_overlay">
                            <Image className="block" src="https://huangrx.cn/img/wx-support-code.jpg" onClick={() => setSupport(!support)} />
                          </View>
                        </Overlay>
                      </Button>
                      <Button className="my_content_header_menu_item my_content_header_menu_button" openType="contact" onContact={onContact}>
                        <IconFont name="manual-customer-service" size="72" color="white"></IconFont>
                        <Text className="my_content_header_menu_text">人工客服</Text>
                      </Button>
                    </View>
                    <View className="my_content_gap"></View>
                    <View className="my_menu_content">
                      <Text className="my_menu_content_title">基础功能</Text>
                      <View className="my_menu_items">
                        <View className="my_menu_item" onClick={() => onMenuChange("/settings/account/index")}>
                          <View className="my_menu_item_title">
                            <IconFont name="account" size="48" color="black"></IconFont>
                            <Text className="my_menu_text">账号</Text>
                          </View>
                          <IconFont name="arrow-right" size="48" color="black"></IconFont>
                        </View>
                        <View className="my_menu_item" onClick={() => onMenuChange("/settings/setting/index")}>
                          <View className="my_menu_item_title">
                            <IconFont name="setting" size="48" color="black"></IconFont>
                            <Text className="my_menu_text">设置</Text>
                          </View>
                          <IconFont name="arrow-right" size="48" color="black"></IconFont>
                        </View>
                        <View className="my_menu_item" onClick={() => onMenuChange("/settings/privacy/index")}>
                          <View className="my_menu_item_title">
                            <IconFont name="privacy" size="48" color="black"></IconFont>
                            <Text className="my_menu_text">隐私</Text>
                          </View>
                          <IconFont name="arrow-right" size="48" color="black"></IconFont>
                        </View>
                        <View className="my_menu_item" onClick={() => onMenuChange("/settings/agreement/index")}>
                          <View className="my_menu_item_title">
                            <IconFont name="agreement" size="48" color="black"></IconFont>
                            <Text className="my_menu_text">协议</Text>
                          </View>
                          <IconFont name="arrow-right" size="48" color="black"></IconFont>
                        </View>
                        <View className="my_menu_item" onClick={() => onMenuChange("/settings/about/index")}>
                          <View className="my_menu_item_title">
                            <IconFont name="about" size="48" color="black"></IconFont>
                            <Text className="my_menu_text">关于</Text>
                          </View>
                          <IconFont name="arrow-right" size="48" color="black"></IconFont>
                        </View>
                        <Button openType="share" className="my_menu_item my_menu_item_button">
                          <View className="my_menu_item_title">
                            <IconFont name="share" size="48" color="black"></IconFont>
                            <Text className="my_menu_text">分享</Text>
                          </View>
                          <IconFont name="arrow-right" size="48" color="black"></IconFont>
                        </Button>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <FooterBar />
          </View>
      }
    </View>
  )
}

export default my;