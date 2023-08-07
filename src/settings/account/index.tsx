import { Button, Image, Text, View } from "@tarojs/components";
import { NavBar } from "@antmjs/vantui"
import Taro from "@tarojs/taro";
import "./index.css";
import WxAvatarAndName from "../../components/WxAvatarAndName";
import IconFont from "../../assets/iconfont/index.weapp";
import { IRootState } from "src/store/reducers/RootReducer";
import { useSelector } from "react-redux";

const Account = () => {

  const { userProfile } = useSelector((state: IRootState) => state.user)

  const handlerBind = () => {
    Taro.navigateTo({
      url: '/user/register/index'
    });
  }

  return (
    <View>
      {
        !userProfile.openid ?
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
              {
                userProfile.mobile ?
                  <View className="account_bottom">
                    <Text>您已绑定手机号，{userProfile.mobile}。</Text>
                    <Text>数据目前只支持管理员操作！</Text>
                    <Button onClick={handlerBind}>
                      <Text>立即换绑</Text>
                      <IconFont name="arrow-right" size="48" color="white"></IconFont>
                    </Button>
                  </View>
                  :
                  <View className="account_bottom">
                    <Text>您还未绑定手机号，绑定将尊享更多功能。</Text>
                    <Button onClick={handlerBind}>
                      <Text>立即绑定</Text>
                      <IconFont name="arrow-right" size="48" color="white"></IconFont>
                    </Button>
                  </View>
              }
            </View>
          </View>
      }
    </View>
  )
}

export default Account;