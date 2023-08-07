import { View, Text, Button } from "@tarojs/components";
import { PullToRefresh, InfiniteScroll, NavBar, Image, Toast } from "@antmjs/vantui"
import { useRef, useState } from "react";
import Taro, { getStorageSync } from "@tarojs/taro";
import "./index.css";
import { acquireLoveLetter } from "../../api/service/ApiService";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/reducers/RootReducer";
import { RoleType } from "../../type/user";
import { QueryPageParam } from "../../type/daily";
import { LoveLetterRecord } from "../../type/letter";
import dayjs from "dayjs";

const LoveLetter = () => {
  const Toast_ = Toast.createOnlyToast();
  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;
  const { userProfile } = useSelector((state: IRootState) => state.user);
  const access_token = getStorageSync("ACCESS_TOKEN");
  const [queryPageParam, setQueryPageParam] = useState<QueryPageParam>({ page_num: 0, page_size: 10 });
  const [data, setData] = useState<LoveLetterRecord[]>([]);
  const InfiniteScrollInstance = useRef<any>();

  const refresh = () => {
    return new Promise<undefined>(async (resolve) => {

      const updatePageParam = {
        ...queryPageParam,
        page_num: 1
      }
      setQueryPageParam(updatePageParam)
      acquireLoveLetter(updatePageParam).then((res) => {
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
      setQueryPageParam(updatePageParam)
      const res = await acquireLoveLetter(updatePageParam);
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
      Toast_.show("登录后才能发布小情书哦！");

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
      url: "/publish/loveletter/index"
    })
  }

  return (
    <View className="letter_container">
      <View style={`paddingTop: ${paddingTopNum + 30}px;`} >
        <NavBar
          leftArrow
          onClickLeft={() => {Taro.navigateTo({url: "/subpage/home/index"})}}
          fixed={true}
          className="custom_header letter_navbar"
        />

        <View className="letter_body">

          <View className="letter_body_header">
            <Image src="https://huangrx.cn/svg/star-1.svg" className="letter_body_header_image" />
            <Button onClick={publish}>发布</Button>
          </View>

          <PullToRefresh onRefresh={refresh}>
            <View className="letter_items">
              <View className="letter_items_container">
                <View className="letter_items_body">
                  {
                    data.map((item, index) => (
                      index % 2 === 0 ?
                        <View className="letter_item" key={index}>
                          <View className="letter_item_header">
                            <Image className="letter_item_header_icon" src={item.avatar} round={true} width="30px" height="30px" />
                            <View className="letter_item_header_content">
                              <Text className="letter_item_header_nickname">{item.nickname}</Text>
                              <Text className="letter_item_header_date">{dayjs(item.create_time).format('MM-DD HH:mm')}</Text>
                            </View>
                          </View>
                          <Text className="letter_item_content">{item.content}</Text>
                        </View>
                        :
                        ""
                    ))
                  }
                </View>
                <View className="letter_items_body">
                  {
                    data.map((item, index) => (
                      index % 2 !== 0 ?
                        <View className="letter_item" key={index}>
                          <View className="letter_item_header">
                            <Image className="letter_item_header_icon" src={item.avatar} round={true} width="30px" height="30px" />
                            <View className="letter_item_header_content">
                              <Text className="letter_item_header_nickname">{item.nickname}</Text>
                              <Text className="letter_item_header_date">{dayjs(item.create_time).format('MM-DD HH:mm')}</Text>
                            </View>
                          </View>
                          <Text className="letter_item_content">{item.content}</Text>
                        </View>
                        :
                        ""
                    ))
                  }
                </View>
              </View>
              <InfiniteScroll loadMore={load} ref={InfiniteScrollInstance} />
            </View>
          </PullToRefresh>
          <Toast_ />
        </View>
      </View>
    </View>
  )
}

export default LoveLetter;