import { Button, Form, Input, Text, View } from "@tarojs/components";
import { NavBar, Switch, Toast } from "@antmjs/vantui"
import Taro, { setStorage } from "@tarojs/taro";
import "./index.css";
import { useState } from "react";
import { acquireUser, login } from "../../api/service/ApiService";
import { LoginType } from "../../type/user";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store/reducers/RootReducer";
import { setUserProfile } from "../../store/action/UserActions";
import IconFont from "../../assets/iconfont/index.weapp";
import { aes } from "../../api/service/CryptoJS";
import { toBase64 } from "../../api/service/Base64";

const Toast_ = Toast.createOnlyToast()

const Login = () => {
  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;
  const [switchValue, setSwitchValue] = useState<boolean>(false);
  const { openid } = useSelector((state: IRootState) => state.user)
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handlerAgreement = (param: string) => {
    Taro.navigateTo({
      url: param
    })
  }

  const handlerLogin = (event) => {
    if (!switchValue) {
      Toast_.show("您需要同意用户使用协议与隐私政策！");
      return;
    }

    const { mobile, password } = event.detail.value;

    var encryptPassword = aes.encrypt(toBase64(password), { key: "itMCaD7HcfAnia5c", mode: "ECB", padding: "Pkcs7", key_size: "128", type: "advanced" });

    const param = {
      "mobile": mobile,
      "password": encryptPassword,
      "login_type": LoginType.NORMAL
    }

    login(param).then((res) => {
      if (res.code === 0 && res.data) {
        setStorage({
          key: "ACCESS_TOKEN",
          data: res.data.access_token
        })
        setStorage({
          key: "REFRESH_TOKEN",
          data: res.data.refresh_token
        })

        acquireUser(openid).then((res) => {
          if (res.code === 0 && res.data) {
            dispatch(
              setUserProfile({
                avatar: res.data.avatar,
                nickname: res.data.nickname,
                mobile: res.data.mobile,
                role: res.data.role,
                openid: res.data.openid,
                id: res.data.id
              })
            );
          }
        })
        Taro.reLaunch({
          url: "/subpage/my/index"
        })
      } else {
        Toast_.show("用户名密码可能不正确呀 😭！");
      }
    })
  }

  const switchShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <View className="login_container" style={`paddingTop: ${paddingTopNum + 30}px; min-height: calc(100vh -  ${paddingTopNum + 30}px)`}>
      <NavBar
        leftArrow
        onClickLeft={() => Taro.navigateBack()}
        fixed={true}
        className="custom_header login_custom_header"
      />
      <View>

        <View className="login_header">
          <View className="login_header_flower pulsate-fwd"></View>

          <View className="login_header_content">
            <Text>
              Welcome Login !
            </Text>
          </View>
        </View>


        <Form className="login_form" onSubmit={handlerLogin}>
          <View className="login_form_item">
            <Text>电话号码</Text>
            <Input name="mobile" type="text" placeholder="138******27" />
          </View>
          <View className="login_form_item">
            <Text>密码</Text>
            <View className="login_form_item_password_body">
              <Input name="password"
                password={showPassword ? false : true}
                type="safe-password"
                placeholder="********" />

              <View onClick={switchShowPassword} className="login_form_item_password_eye">
                {
                  showPassword ?
                    <IconFont name="visibility" size="72" color="black"></IconFont>
                    :
                    <IconFont name="visibility_off" size="72" color="black"></IconFont>
                }
              </View>

            </View>
          </View>
          <View className="login_form_agreement">
            <View>
              <Text>我同意</Text>
              <Text className="login_agreement_a" onClick={() => { handlerAgreement("/subpage/agreement/index") }}> 用户使用协议 </Text>
              <Text>与</Text>
              <Text className="login_agreement_a" onClick={() => { handlerAgreement("/subpage/privacy/index") }}> 隐私政策 </Text>
            </View>
            <Switch checked={switchValue} onChange={() => setSwitchValue(!switchValue)} className="login_agreement_agree" />
          </View>
          <Button className="login_form_login" formType="submit">立即登录 🧀</Button>
        </Form>
      </View>
      <Toast_ />
    </View>
  )
}

export default Login;