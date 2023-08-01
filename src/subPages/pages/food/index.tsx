import { useState, useRef } from "react"
import { PullToRefresh, InfiniteScroll, NavBar } from "@antmjs/vantui"
import { View, Image } from "@tarojs/components"
import Taro from "@tarojs/taro";
import "./index.css";

const Food = () => {
  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;

  const [data, setdata] = useState<string[]>([]);
  const InfiniteScrollInstance = useRef<any>();

  const loadDataAsync = () => {
    return [
      'https://huangrx.cn/img/food-7.jpg',
      'https://huangrx.cn/img/food-4.jpg',
      'https://huangrx.cn/img/food-3.jpg',
      'https://huangrx.cn/img/food-2.jpg',
      'https://huangrx.cn/img/food-1.jpg'
    ]
  }

  const refresh = () => {
    console.log(1)
    return new Promise<undefined>(async (resolve) => {
      const reslult = loadDataAsync();
      setdata(reslult);
      InfiniteScrollInstance.current.reset();
      resolve(undefined);
    });
  };

  const load = async () => {
    try {
      // 进行异步加载操作
      const newData = loadDataAsync();
      // 将加载后的数据合并到原数据中
      const updatedData = data.concat(newData);
      // 更新 state
      setdata(updatedData);

      // 根据条件判断返回状态信息  data.length
      if (updatedData.length === 10) {
        return 'complete';
      } else {
        return 'loading';
      }
    } catch (error) {
      // 处理加载失败的情况
      return 'error';
    }
  };


  return (
    <View className="food_container">
      <NavBar
        title="食物呀 🍔"
        leftArrow
        onClickLeft={() => Taro.navigateBack()}
        fixed={true}
        className="custom_header"
      />
      <View className="food_body" style={`paddingTop: ${paddingTopNum + 30}px; marginTop: 1rem`}>
        <PullToRefresh onRefresh={refresh}>
          <View className="food_image_items">
            {data.map((item, index) => (
              <Image src={item} key={index} className="food_image_item"/>
            ))}
            <InfiniteScroll loadMore={load} ref={InfiniteScrollInstance} />
          </View>
        </PullToRefresh>
      </View>
    </View>
  )
}

export default Food;