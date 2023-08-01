import { View } from "@tarojs/components";
import { Dialog, Cell, NavBar} from "@antmjs/vantui";
import { useCallback } from "react";
import Taro from "@tarojs/taro";
import "./index.css";

const Dialog_ = Dialog.createOnlyDialog()

const Memorial = () => {

  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;

  const alert = useCallback((message: string) => {
    Dialog_.alert({
      title: '那 天',
      message: message,
    }).then((value) => {
      console.log('dialog result', value)
    })
  }, [])


  return (
    <View className="memorial_container" style={`paddingTop: ${paddingTopNum + 30}px; marginTop: 1rem`} >
      <NavBar
        title="好日子 ⏳"
        leftArrow
        onClickLeft={() => Taro.navigateBack()}
        fixed={true}
        className="custom_header"
      />
      
      <View className="memorial_items">
      <Dialog_ className="memorial_dialog"/>
      <Cell title="第一次遇到你" onClick={() => alert('大概是在初中')} className="memorial_item" />
      <Cell title="我们相恋在" onClick={() => alert('2021年1月29号')} className="memorial_item"/>
      </View>
    </View>
  )
}

export default Memorial;