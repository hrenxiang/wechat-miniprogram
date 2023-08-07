import { Button, Input, Text, Textarea, View } from "@tarojs/components";
import { NavBar, Uploader, Toast } from "@antmjs/vantui";
import Taro, { getStorageSync } from "@tarojs/taro";
import "./index.css";
import { useState } from "react";
import { saveMemorial } from "../../api/service/ApiService";
import KeepSmilingSvg from "../../assets/svg/keep-smiling.svg";
import DatetimePickerBox_ from "../../components/DatetimePickerBox_";
import dayjs from "dayjs";
import { BASE_URL } from "../../api/service/ApiService";

export interface UploaderDetail {
  'size': number;
  'image': string;
  'url': string;
  'thumb': string;
}

const Memorial = () => {
  const Toast_ = Toast.createOnlyToast();
  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [cover, setCover] = useState<UploaderDetail[]>([]);
  const [memorialDate, setMemorialDate] = useState<string>('');
  const access_token = getStorageSync("ACCESS_TOKEN");
  const maxCoverSize = 1048576;

  const contentChange = (e) => {
    const newText = e.detail.value;
    setContent(newText);
  };

  const publish = () => {

    if (!title || !content || !cover || !cover[0] || !memorialDate) {
      Toast_.show('表单必须填充完整！');
      return;
    }

    if (cover[0].size > maxCoverSize) {
      Toast_.show('图片大小不能操过 1MB！');
      return;
    }

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
          saveMemorial(title, content, response.data, memorialDate, access_token).then((res) => {
            if (res.code === 0) {
              Taro.reLaunch({
                url: "/feature/memorial/index"
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
  }

  const getDatetimePickerBoxValue = (state) => {
    setMemorialDate(dayjs(state.innerValue).format('YYYY-MM-DD HH:mm'));
  };

  const afterRead = (event) => {
    const { file } = event.detail
    // {size: 1195439, type: "image", url: "http://tmp/5kjjg0Bip2uy258a0eb8fbf87febb91b9c861295aa99.png", thumb: "http://tmp/5kjjg0Bip2uy258a0eb8fbf87febb91b9c861295aa99.png"}
    setCover(cover.concat(file))
  }

  const beforeRead = (event) => {
  }

  const deleteAction = (event) => {
    const { index } = event.detail
    const valueNew = JSON.parse(JSON.stringify(cover))
    valueNew.splice(index, 1)
    setCover(valueNew)
  }

  return (
    <View className="publish_memorial_container" style={`paddingTop: ${paddingTopNum + 30}px;`}>
      <NavBar
        leftArrow
        onClickLeft={() => Taro.navigateBack()}
        fixed={true}
        className="custom_header publish_memorial_navbar"
      />

      <View className="publish_memorial_body">

        <View className="publish_memorial_content">
          <View>
            <KeepSmilingSvg style={{ height: '20vh', width: '100%' }} />
          </View>
          <View className="publish_memorial_content_title">
            <Text className="publish_mc_text">标题（必填）：</Text>
            <Input className="publish_mct_input" value={title} onInput={(e) => setTitle(e.detail.value)} />
          </View>
          <View className="publish_memorial_content_description">
            <Text className="publish_mc_text">描述（必填）：</Text>
            <Textarea className="publish_mcd_textarea"
              placeholder="甜蜜的话更让人开心哦！"
              maxlength={500}
              placeholderStyle="fontSize: 0.8rem"
              onInput={contentChange}
            >
            </Textarea>
            <View className="publish_memorial_word_num">
              <Text>{content.length}/500</Text>
            </View>
          </View>
          <View className="publish_memorial_content_cover">
            <Text className="publish_mc_text">配图（必填）：</Text>
            <Uploader
              fileList={cover}
              onAfterRead={afterRead}
              onDelete={deleteAction}
              maxCount={1}
              onBeforeRead={beforeRead}
              className="publish_mcc_file" />
            {cover[0]?.size > maxCoverSize ? <Text className="publish_mcc_file_big">图片大小不能操过 1MB！</Text> : ""}
          </View>
          <View className="publish_memorial_content_date">
            <Text className="publish_mc_text">纪念日日期（必填）：</Text>
            <DatetimePickerBox_ getValue={getDatetimePickerBoxValue} />
          </View>
        </View>
        <Button className="publish_memorial_button" onClick={publish}>发布</Button>
      </View>
      <Toast_ />
    </View>
  )
}

export default Memorial;