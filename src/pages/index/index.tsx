import { Button, View } from "@tarojs/components"
import Taro from "@tarojs/taro";
import { acquireUser, jscode2session } from '../../api/service/ApiService';
import { useDispatch } from 'react-redux';
import { setOpenId, setUserProfile } from '../../store/action/UserActions';

import "./index.css";

const Index = () => {
  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;
  
  const dispatch = useDispatch();

  const handlerStart = () => {
    Taro.login({
      success: (res) => {
        if (res.code) {
          // 发送请求获取openid
          jscode2session(res.code).then((response) =>  {
            if (response.code === 0 && response.data) {
              acquireUser(response.data.openid).then((res) => {
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

              dispatch(
                setOpenId(response.data.openid)
              );
            }

            Taro.reLaunch({
              url: "/subpage/home/index"
            })
          })
        } else {
          console.log('获取用户登录态失败！', res.errMsg);
        }
      },
      fail: (err) => {
        console.log('登录失败！', err);
      },
    });
  }

  return (
    <View className="index_body">
      <View style={`paddingTop: ${paddingTopNum + 30}px`}>
        <Button className="index_button" onClick={handlerStart}>Get Start !</Button>
      </View>

    </View>
  )
}

export default Index;