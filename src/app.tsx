import { PropsWithChildren, useEffect } from 'react'
import { Provider } from "react-redux";
import { useLaunch } from '@tarojs/taro'
import './app.css'
import Taro from '@tarojs/taro'
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./redux/reducers/rootReducer";


// 创建Redux store
const store = configureStore({
  reducer: rootReducer,
  // 可选的其他配置选项
});

const App = ({ children }: PropsWithChildren) => {

  useLaunch(() => {
    console.log('App launched.')
  })

  useEffect(() => {
    Taro.loadFontFace(
      {
        global: true,
        family: 'kuaile',
        source: 'url("https://fonts.gstatic.com/s/zcoolkuaile/v19/tssqApdaRQokwFjFJjvM6h2WpozzoXhC2g.ttf")'
      }
    );

    Taro.loadFontFace(
      {
        global: true,
        family: 'Lilita One',
        source: 'url("https://fonts.gstatic.com/s/lilitaone/v13/i7dPIFZ9Zz-WBtRtedDbUEZ2RFq7AwU.ttf")'
      }
    );
  }, []);

  // children 是将要会渲染的页面
  return (
    <Provider store={store}> {children} </Provider>
  )
}

export default App