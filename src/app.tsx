import { PropsWithChildren } from 'react'
import { Provider } from "react-redux";
import { useLaunch } from '@tarojs/taro'
import './app.css'
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./store/reducers/RootReducer";


// 创建Redux store
const store = configureStore({
  reducer: rootReducer,
  // 可选的其他配置选项
});

const App = ({ children }: PropsWithChildren) => {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return (
    <Provider store={store}> {children} </Provider>
  )
}

export default App