import { Button, Form, Input, Text, View } from "@tarojs/components";
import { NavBar, Switch, Toast } from "@antmjs/vantui";
import Taro from "@tarojs/taro";
import "./index.css";
import { useState } from "react";

const Toast_ = Toast.createOnlyToast()

const Register = () => {
  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;
  const [switchValue, setSwitchValue] = useState<boolean>(false);

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
    Toast_.show("后端接口还在开发中！");
  }

  return (
    <View className="register_body">
      <NavBar
        leftArrow
        onClickLeft={() => Taro.navigateBack()}
        fixed={true}
        className="custom_header"
      />
      <View className="register_container" style={`paddingTop: ${paddingTopNum + 30}px; marginTop: 1rem`}>
        <View className="register_header">
          <Text className="register_header_title">让我们开始吧</Text>
          <Text className="register_header_content">填写表单以继续</Text>
        </View>
        <Form className="register_form" onSubmit={handlerSubmit}>
          <View className="register_form_item">
            <Text>电话号码</Text>
            <Input name="mobile" placeholder="152******27"/>
          </View>
          <View className="register_form_item">
            <Text>验证码</Text>
            <Input name="verification_code" placeholder="123456"/>
          </View>
          <View className="register_form_agreement">
            <View>
              <Text>我同意</Text>
              <Text className="register_agreement_a" onClick={() => {handlerAgreement("/subPages/pages/agreement/index")}}> 用户使用协议 </Text>
              <Text>与</Text>
              <Text className="register_agreement_a" onClick={() => {handlerAgreement("/subPages/pages/privacy/index")}}> 隐私政策 </Text>
            </View>
            <Switch checked={switchValue} onChange={() => setSwitchValue(!switchValue)} className="register_agreement_agree"/>
          </View>
          <Button className="register_form_login" formType="submit">注册</Button>
          <View className="register_form_or"><Text>或</Text></View>
          <Button className="register_form_wx_login">微信获取手机号注册</Button>
        </Form>
        <Toast_ />
      </View>
    </View>
  )
}

export default Register;