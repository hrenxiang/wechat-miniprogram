import NavBar from "../../../components/NavBar";
import FooterBar from "../../../components/FooterBar";
import { View, Text, Image, Button } from "@tarojs/components";
import { Overlay } from "@antmjs/vantui";
import "./index.css";
import WxAvatarAndName from "../../../components/WxAvatarAndName";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { UserProfile } from "../../../type/user";
import IconFont from "../../../assets/iconfont/index.weapp";
import { useShareAppMessage } from "@tarojs/taro";

const my = () => {
  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;

  const [acquireUserProfile, setAcquireUserProfile] = useState<boolean>();
  const [userProfile, setUserProfile] = useState<UserProfile>({ avatar: '', nickname: '' })

  const [support, setSupport] = useState<boolean>(false)

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

  return (
    <View>
      {
        acquireUserProfile ?
          <WxAvatarAndName />
          :
          <View>
            <NavBar />
            <View className="my_container">
              <View className="my_content" style={`paddingTop: ${paddingTopNum + 30}px;  marginTop: 1rem`}>
                <View className="my_header">
                  <View className="my_header_info">
                    <Image src={userProfile.avatar} className="my_header_image" />
                    <Text className="my_header_nickname">{userProfile.nickname}</Text>
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
                            <Image className="block" src="https://huangrx.cn/img/wx-support-code.jpg" onClick={() => setSupport(!support)}/>
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
                      <View className="my_menu_item" onClick={() => onMenuChange("/subPages/pages/account/index")}>
                          <View className="my_menu_item_title">
                            <IconFont name="account" size="48" color="black"></IconFont>
                            <Text className="my_menu_text">账号</Text>
                          </View>
                          <IconFont name="arrow-right" size="48" color="black"></IconFont>
                        </View>
                        <View className="my_menu_item" onClick={() => onMenuChange("/subPages/pages/setting/index")}>
                          <View className="my_menu_item_title">
                            <IconFont name="setting" size="48" color="black"></IconFont>
                            <Text className="my_menu_text">设置</Text>
                          </View>
                          <IconFont name="arrow-right" size="48" color="black"></IconFont>
                        </View>
                        <View className="my_menu_item" onClick={() => onMenuChange("/subPages/pages/privacy/index")}>
                          <View className="my_menu_item_title">
                            <IconFont name="privacy" size="48" color="black"></IconFont>
                            <Text className="my_menu_text">隐私</Text>
                          </View>
                          <IconFont name="arrow-right" size="48" color="black"></IconFont>
                        </View>
                        <View className="my_menu_item" onClick={() => onMenuChange("/subPages/pages/agreement/index")}>
                          <View className="my_menu_item_title">
                            <IconFont name="agreement" size="48" color="black"></IconFont>
                            <Text className="my_menu_text">协议</Text>
                          </View>
                          <IconFont name="arrow-right" size="48" color="black"></IconFont>
                        </View>
                        <View className="my_menu_item" onClick={() => onMenuChange("/subPages/pages/about/index")}>
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