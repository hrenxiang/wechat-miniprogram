import { Button, Image, Text, View } from "@tarojs/components";
import { InfiniteScroll, PullToRefresh, NavBar, Toast } from "@antmjs/vantui";
import Taro, { getStorageSync } from "@tarojs/taro";
import "./index.css";
import { useRef, useState } from "react";
import { acquireMemorial } from "../../api/service/ApiService";
import { MemorialRecord } from "../../type/memorial";
import { QueryPageParam } from "../../type/daily";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/reducers/RootReducer";
import { RoleType } from "../../type/user";
import MilkSvgIcon from "../../assets/svg/milk-down-flow.svg";
import dayjs from "dayjs";

const Memorial = () => {
  const Toast_ = Toast.createOnlyToast();
  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;
  const [queryPageParam, setQueryPageParam] = useState<QueryPageParam>({ page_num: 0, page_size: 10 });
  const [data, setData] = useState<MemorialRecord[]>([]);
  const InfiniteScrollInstance = useRef<any>();
  const { userProfile } = useSelector((state: IRootState) => state.user);
  const access_token = getStorageSync("ACCESS_TOKEN");

  const refresh = () => {
    return new Promise<undefined>(async (resolve) => {

      const updatePageParam = {
        ...queryPageParam,
        page_num: 1
      }
      setQueryPageParam(updatePageParam)
      acquireMemorial(updatePageParam).then((res) => {
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
      const res = await acquireMemorial(updatePageParam);
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
      url: "/publish/memorial/index"
    })
  }

  return (
    <View className="memorial_container" style={`paddingTop: ${paddingTopNum + 30}px`}>
      <NavBar
        leftArrow
        onClickLeft={() => {Taro.navigateTo({url: "/subpage/home/index"})}}
        fixed={true}
        className="custom_header memorial-navbar"
      />
      <View className="">

        <View className="memorial_body">


          <View className="memorial_body_header">
            <Image className="memorial_body_header_image" src="https://huangrx.cn/svg/is-my-love.svg" />
            <Button className="memorial_body_header_button" onClick={publish}>发布</Button>
          </View>

          <View className="memorial_body_content">
            {/* <Image className="memorial_body_content_svg" src="https://huangrx.cn/svg/milk-down-flow-pink.svg"/> */}
            <MilkSvgIcon
              style={{
                width: "120vw",
                height: "66vw",
                position: "absolute",
                top: '-5vw',
                right: '-9vw',
                overflow: 'hidden',
                animation: 'slide-in-top 3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
              }}
            />
            {
              userProfile.role === RoleType.ADMIN ?
                <PullToRefresh onRefresh={refresh}>
                  <View className="memorial_items">
                    {
                      data.map((item, index) => (
                        <View className={`${index % 2 === 0 ? "memorial_item_reverse" : "memorial_item"}`} key={index}>
                          {
                            index % 2 === 0 ? "" : <Image className="memorial_item_image" src={item.cover} />
                          }
                          <View className="memorial_item_contant">
                            <Text className="memorial_item_contant_title">{item.title}</Text>
                            <Text className="memorial_item_contant_subtitle">{item.description}</Text>
                            <View className="memorial_item_contant_date">
                              {
                                item.memorial_date ? <Text>距离现在，已经{dayjs().diff(item.memorial_date, 'day')}天啦</Text> : <Text>已经没有一个确切的日期啦</Text>
                              }
                            </View>
                          </View>
                          {
                            index % 2 === 0 ? <Image className="memorial_item_image" src={item.cover} /> : ""
                          }
                        </View>

                      ))
                    }
                    <InfiniteScroll loadMore={load} ref={InfiniteScrollInstance} />
                  </View>
                </PullToRefresh>
                :
                <Text className="memorial_body_guest_tip">这个暂时只对自己人开放呀😭</Text>

            }
            <Toast_ />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Memorial;