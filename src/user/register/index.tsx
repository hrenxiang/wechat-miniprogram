import { Button, Form, Input, Text, View } from "@tarojs/components";
import { NavBar, Switch, Toast } from "@antmjs/vantui";
import Taro from "@tarojs/taro";
import "./index.css";
import { useState } from "react";
import { MobileRegExp, PasswordRegExp } from "../../type/user";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store/reducers/RootReducer";
import { bindMobile, sendSms } from "../../api/service/ApiService";
import { setUserProfile } from "../../store/action/UserActions";
import IconFont from "../../assets/iconfont/index.weapp";
import { aes } from "../../api/service/CryptoJS";
import { toBase64 } from "../../api/service/Base64";

const Toast_ = Toast.createOnlyToast();

const Register = () => {
  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;
  const [switchValue, setSwitchValue] = useState<boolean>(false);
  const { openid, userProfile } = useSelector((state: IRootState) => state.user);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [mobile, setMobile] = useState<string>('');

  const handlerAgreement = (param: string) => {
    Taro.navigateTo({
      url: param
    })
  }

  const handlerSubmit = (event) => {
    if (!switchValue) {
      Toast_.show("您需要同意用户使用协议与隐私政策！");
      return;
    }

    const { mobile, password, smsCode } = event.detail.value;

    if (!smsCode) {
      Toast_.show("请填写验证码！");
      return;
    }

    if (userProfile?.mobile === mobile) {
      Toast_.show("请输入未绑定的手机号。");
      return;
    }

    if (!MobileRegExp.test(mobile)) {
      Toast_.show("请输入正确的手机号。");
      return;
    }

    if (!PasswordRegExp.test(password)) {
      Toast_.show("密码长度最少8位，包括至少1个大写字母，1个小写字母，1个数字。");
      return;
    }

    var encryptPassword = aes.encrypt(toBase64(password), { key: "itMCaD7HcfAnia5c", mode: "ECB", padding: "Pkcs7", key_size: "128", type: "advanced" });

    const updateUserBindParam = {
      mobile: mobile,
      password: encryptPassword,
      openid: openid,
      smsCode: smsCode
    };

    bindMobile(updateUserBindParam).then((res) => {
      if (res.code === 0) {
        dispatch(
          setUserProfile({
            avatar: userProfile.avatar,
            nickname: userProfile.nickname,
            mobile: mobile,
            role: userProfile.role,
            openid: userProfile.openid,
            id: userProfile.id
          })
        );

        Taro.reLaunch({
          url: "/subpage/my/index"
        })
      } else {
        Toast_.show(res.message);
        return;
      }
    })
  }

  const switchShowPassword = () => {
    console.log(showPassword)
    setShowPassword(!showPassword);
  }

  const acquireSmsCode = () => {
    if (!MobileRegExp.test(mobile)) {
      Toast_.show("请输入正确的手机号。");
      return;
    }

    sendSms(mobile).then((res) => {
      Toast_.show(res.message);
    })
  }

  return (
    <View className="register_body">
      <NavBar
        leftArrow
        onClickLeft={() => Taro.navigateBack()}
        fixed={true}
        className="custom_header"
      />
      <View className="register_container" style={`paddingTop: ${paddingTopNum + 30}px; min-height: calc(100vh -  ${paddingTopNum + 30}px)`}>
        <View className="register_header">
          <Text className="register_header_title">让我们开始吧</Text>
          <Text className="register_header_content">填写表单以继续</Text>
        </View>
        <Form className="register_form" onSubmit={handlerSubmit}>
          <View className="register_form_item">
            <Text>电话号码</Text>
            <Input name="mobile" type="text" placeholder="152******27" onInput={(e) => { setMobile(e.detail.value) }} />
          </View>
          <View className="register_form_item">
            <Text>密码</Text>
            <View className="register_form_item_password_body">
              <Input name="password"
                password={showPassword ? false : true}
                type="safe-password"
                placeholder="********" />
              <View onClick={switchShowPassword} className="register_form_item_password_eye">
                {
                  showPassword ?
                    <IconFont name="visibility" size="72" color="black"></IconFont>
                    :
                    <IconFont name="visibility_off" size="72" color="black"></IconFont>
                }
              </View>
            </View>
          </View>
          <View className="register_form_item">
            <Text>验证码</Text>
            <View className="register_sms_code">
              <Input className="register_sms_code_input" name="smsCode" placeholder="123456" />
              <Text className="register_sms_code_button" onClick={acquireSmsCode}>获取验证码</Text>
            </View>
          </View>
          <View className="register_form_agreement">
            <View>
              <Text>我同意</Text>
              <Text className="register_agreement_a" onClick={() => { handlerAgreement("/subpage/agreement/index") }}> 用户使用协议 </Text>
              <Text>与</Text>
              <Text className="register_agreement_a" onClick={() => { handlerAgreement("/subpage/privacy/index") }}> 隐私政策 </Text>
            </View>
            <Switch checked={switchValue} onChange={() => setSwitchValue(!switchValue)} className="register_agreement_agree" />
          </View>
          {
            userProfile.mobile ?
              <Button className="register_form_login" formType="submit">立即换绑 🫧</Button>
              :
              <Button className="register_form_login" formType="submit">确认绑定 🫧</Button>
          }

        </Form>
        <Toast_ />
      </View>
    </View>
  )
}

export default Register;