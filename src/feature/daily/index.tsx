import { useState, useRef } from "react"
import { PullToRefresh, InfiniteScroll, NavBar, Toast } from "@antmjs/vantui"
import { Button, View, Image, Text } from "@tarojs/components"
import Taro, { getStorageSync } from "@tarojs/taro";
import "./index.css";
import { acquireTimeline } from "../../api/service/ApiService";
import { DailyRecord, QueryPageParam } from "../../type/daily";
import { IRootState } from "../../store/reducers/RootReducer";
import { useSelector } from "react-redux";
import { RoleType } from "../../type/user";

const Daily = () => {
  const Toast_ = Toast.createOnlyToast();
  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;
  const [data, setData] = useState<DailyRecord[]>([]);
  const InfiniteScrollInstance = useRef<any>();
  const [queryPageParam, setQueryPageParam] = useState<QueryPageParam>({ page_num: 0, page_size: 5 });
  const { userProfile } = useSelector((state: IRootState) => state.user);
  const access_token = getStorageSync("ACCESS_TOKEN");

  const refresh = () => {
    return new Promise<undefined>(async (resolve) => {
      const updatePageParam = {
        ...queryPageParam,
        page_num: queryPageParam.page_num + 1
      }
      setQueryPageParam({
        page_num: queryPageParam.page_num + 1,
        page_size: 5
      })
      acquireTimeline(updatePageParam).then((res) => {
        if (res.code === 0 && res.data) {
          setData(res.data.records);
        }
      })
      InfiniteScrollInstance.current.reset();
      resolve(undefined);
    });
  };

  const load = async () => {
    try {
      const updatePageParam = {
        ...queryPageParam,
        page_num: queryPageParam.page_num + 1
      }
      setQueryPageParam({
        page_num: queryPageParam.page_num + 1,
        page_size: 5
      })
      const res = await acquireTimeline(updatePageParam);
      if (res.code === 0 && res.data) {
        const updatedData = data.concat(res.data.records);
        setData(updatedData);
        if (updatedData.length >= res.data.total) {
          return 'complete';
        } else {
          return 'loading';
        }
      } else {
        return 'error';
      }
    } catch (error) {
      return 'error';
    }
  };

  const publish = () => {

    if (userProfile.role !== RoleType.ADMIN) {
      Toast_.show("抱歉呀，您暂时无权限发布！");
      return;
    }

    if (!access_token) {
      Toast_.show("登录后才能记录我们的纪念日哦！");

      // 设置延时
      const delayTimeout = setTimeout(() => {
        // 这里是延时执行的代码
        Taro.navigateTo({
          url: "/user/login/index"
        });

        clearTimeout(delayTimeout);
      }, 1000);
      return;
    }

    Taro.navigateTo({
      url: "/publish/daily/index"
    })
  }

  return (
    <View className="daily_container">
      <NavBar
        leftArrow
        onClickLeft={() => {Taro.navigateTo({url: "/subpage/home/index"})}}
        fixed={true}
        className="custom_header daily_navbar"
      />
      <View className="daily_body" style={`paddingTop: ${paddingTopNum + 30}px;`}>

        <View className="daily_header">
          <Text>爱情本就是</Text>
          <Text>生活中最美丽的画面</Text>
          <Text>所以每一刻都值得被细细品味和记录</Text>
          <Button onClick={publish}>发布</Button>
        </View>

        <PullToRefresh onRefresh={refresh} className="daily_refresh">
          <View className="daily_items">
            {data.map((item, index) => (
              <View className="daily_item" key={index}>
                {
                  item.illustration ?
                    <Image src={`${item.illustration}`} />
                    :
                    ""
                }

                <View className="daily_item_content">
                  <Text className="daily_item_title">{item.tittle}</Text>
                  <Text className="daily_item_subtitle">{item.content}</Text>
                </View>
              </View>
            ))}
            <InfiniteScroll loadMore={load} ref={InfiniteScrollInstance} />
            <Toast_/>
          </View>
        </PullToRefresh>
      </View>
    </View>
  )
}

export default Daily;