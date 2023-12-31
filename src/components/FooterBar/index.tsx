import { View } from "@tarojs/components";
import { Tabbar, TabbarItem } from "@antmjs/vantui"
import { useState } from "react";
import "./index.css"
import { switchFooterMenu } from "../../store/action/FooterActions";
import { useDispatch, useSelector } from 'react-redux';
import Taro from "@tarojs/taro";
import { IRootState } from "../../store/reducers/RootReducer";

const FooterBar = () => {
  const dispatch = useDispatch();

  const [active] = useState<number>(useSelector((state: IRootState) => state.footer));

  const switchMenu = (active_num: number) => {
    Taro.reLaunch({
      url: active_num === 1 ? "/subpage/home/index" : "/subpage/my/index"
    })

    dispatch(
      switchFooterMenu(active_num)
    );
  }

  return (
    <View className="footer_container">
      <Tabbar fixed={true}>
        <TabbarItem icon="like-o" className={`${active === 1 ? "footer_menu_active" : ""}`} onClick={() => switchMenu(1)} />
        <TabbarItem icon="smile-comment-o" className={`${active === 2 ? "footer_menu_active" : ""}`} onClick={() => switchMenu(2)} />
      </Tabbar>
    </View>
  )
}

export default FooterBar;