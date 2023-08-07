import { Button, Input, Text, Textarea, View } from "@tarojs/components";
import { NavBar, Toast, Uploader } from "@antmjs/vantui";
import Taro, { getStorageSync } from "@tarojs/taro";
import "./index.css";
import { useState } from "react";
import SunShineSvg from "../../assets/svg/sun-shine.svg";
import { UploaderDetail } from "../memorial";
import DatetimePickerBox_ from "../../components/DatetimePickerBox_";
import { saveDaily } from "../../api/service/ApiService";
import dayjs from "dayjs";
import { BASE_URL } from "../../api/service/ApiService";

const Daily = () => {
  const Toast_ = Toast.createOnlyToast();
  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;
  const access_token = getStorageSync("ACCESS_TOKEN");
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [cover, setCover] = useState<UploaderDetail[]>([]);
  const [createTime, setCreateTime] = useState<string>('');
  const maxCoverSize = 1048576;

  const contentChange = (e) => {
    const newText = e.detail.value;
    setContent(newText);
  };

  const publish = () => {
    if (!title || !content) {
      Toast_.show('表单必须填充完整！');
      return;
    }

    if (cover && cover[0] && cover[0].size > maxCoverSize) {
      Toast_.show('图片大小不能操过 1MB！');
      return;
    }

    if (cover && cover[0]) {
      Taro.uploadFile({
        url: `${BASE_URL}/user/wx/upload`, //仅为示例，非真实的接口地址
        filePath: cover[0]?.url,
        name: 'file',
        formData: {
          'user': 'test'
        },
        success(res) {
          const response = JSON.parse(res.data)
          if (response.code === 0) {
            saveDaily(title, content, response.data, createTime, access_token).then((res) => {
              if (res.code === 0) {
                Taro.reLaunch({
                  url: "/feature/daily/index"
                })
              } else {
                Toast_.show(res.message);
              }
            })
          } else {
            Toast_.show('图片上传失败！');
          }
  
        },
        fail: () => {
          Toast_.show('图片上传失败！');
        }
      })
    } else {
      saveDaily(title, content, '', createTime, access_token).then((res) => {
        if (res.code === 0) {
          Taro.reLaunch({
            url: "/feature/daily/index"
          })
        } else {
          Toast_.show(res.message);
        }
      })
    }

    
  }

  const getDatetimePickerBoxValue = (state) => {
    setCreateTime(dayjs(state.innerValue).format('YYYY-MM-DD HH:mm'));
  };

  const afterRead = (event) => {
    const { file } = event.detail
    // {size: 1195439, type: "image", url: "http://tmp/5kjjg0Bip2uy258a0eb8fbf87febb91b9c861295aa99.png", thumb: "http://tmp/5kjjg0Bip2uy258a0eb8fbf87febb91b9c861295aa99.png"}
    setCover(cover.concat(file))
  }

  const deleteAction = (event) => {
    const { index } = event.detail
    const valueNew = JSON.parse(JSON.stringify(cover))
    valueNew.splice(index, 1)
    setCover(valueNew)
  }

  return (
    <View className="publish_daily_container" style={`paddingTop: ${paddingTopNum + 30}px; min-height: calc(100vh -  ${paddingTopNum + 30}px)`}>
      <NavBar
        leftArrow
        onClickLeft={() => Taro.navigateBack()}
        fixed={true}
        className="custom_header publish_daily_navbar"
      />

      <View className="publish_daily_body">

        <View className="publish_daily_content">
          <View>
            <SunShineSvg style={{ height: '30vh', width: '100%' }} />
          </View>
          <View className="publish_daily_content_title">
            <Text className="publish_mc_text">标题（必填）：</Text>
            <Input className="publish_mct_input" value={title} onInput={(e) => setTitle(e.detail.value)} />
          </View>
          <View className="publish_daily_content_description">
            <Text className="publish_mc_text">描述（必填）：</Text>
            <Textarea className="publish_mcd_textarea"
              placeholder="甜蜜的话更让人开心哦！"
              maxlength={500}
              placeholderStyle="fontSize: 0.8rem"
              onInput={contentChange}
            >
            </Textarea>
            <View className="publish_daily_word_num">
              <Text>{content.length}/500</Text>
            </View>
          </View>
          <View className="publish_daily_content_cover">
            <Text className="publish_mc_text">配图：</Text>
            <Uploader
              fileList={cover}
              onAfterRead={afterRead}
              onDelete={deleteAction}
              maxCount={1}
              className="publish_mcc_file" />
            {cover[0]?.size > maxCoverSize ? <Text className="publish_mcc_file_big">图片大小不能操过 1MB！</Text> : ""}
          </View>
          <View className="publish_daily_content_date">
            <Text className="publish_mc_text">发布日期：</Text>
            <DatetimePickerBox_ getValue={getDatetimePickerBoxValue} />
          </View>
        </View>
        <Button className="publish_daily_button" onClick={publish}>发布</Button>
      </View>
      <Toast_ />
    </View>
  )
}

export default Daily;