import { View, Text } from "@tarojs/components";
import { NavBar, Image } from "@antmjs/vantui";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import "./index.css";
import { acquireLoveLetter } from "../../../api/service/ApiService";
import dayjs from "dayjs";

const LoveLetter = () => {

  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;

  const [letterData, setLetterData] = useState<string>();

  useEffect(() => {
      acquireLoveLetter().then((res) => {
        setLetterData(res.result.content)
      })
  }, [])

  const getCurrentTimeFormatted = () => {
    const now = dayjs();
    return now.format('MM-DD HH:mm');
  }

  return (
    <View className="letter_container" style={`paddingTop: ${paddingTopNum + 30}px; marginTop: 1rem`} >
      <NavBar
        title="小情书 ✉️"
        leftText="返回"
        leftArrow
        onClickLeft={() => Taro.navigateBack()}
        fixed={true}
        className="letter_header"
      />

      <View className="letter_body">
        <View className="letter_items">
          
              <View className="letter_item">
                <View className="letter_item_header">
                  <Image className="letter_item_header_icon" src="https://images.huangrx.cn/uploads/2023/04/21/blog-web-logo-2.png" round={true} width="30px" height="30px" />
                  <View className="letter_item_header_content">
                    <Text className="letter_item_header_nickname">huangrx</Text>
                    <Text className="letter_item_header_date">{getCurrentTimeFormatted()}</Text>
                  </View>
                </View>
                <Text className="letter_item_content">{letterData}</Text>
              </View>
            
              <View className="letter_item">
                <View className="letter_item_header">
                  <Image className="letter_item_header_icon" src="https://images.huangrx.cn/uploads/2023/04/21/blog-web-logo-2.png" round={true} width="35px" height="35px" />
                  <View className="letter_item_header_content">
                    <Text className="letter_item_header_nickname">huangrx</Text>
                    <Text className="letter_item_header_date">{getCurrentTimeFormatted()}</Text>
                  </View>
                </View>
                <Text className="letter_item_content">在我眼中，你是最美丽的风景，你的微笑是我生命的阳光。你的温柔如春风拂面，让我心旷神怡。无论在哪里，我的心都牵挂着你，我愿意陪伴你走过每一个时刻，与你共度人生的美好时光。</Text>
              </View>

              <View className="letter_item">
                <View className="letter_item_header">
                  <Image className="letter_item_header_icon" src="https://images.huangrx.cn/uploads/2023/04/21/blog-web-logo-2.png" round={true} width="30px" height="30px" />
                  <View className="letter_item_header_content">
                    <Text className="letter_item_header_nickname">huangrx</Text>
                    <Text className="letter_item_header_date">{getCurrentTimeFormatted()}</Text>
                  </View>
                </View>
                <Text className="letter_item_content">你是我生命中最美丽的诗篇，我会用心铭记每一刻与你相伴的时光。</Text>
              </View>

              <View className="letter_item">
                <View className="letter_item_header">
                  <Image className="letter_item_header_icon" src="https://images.huangrx.cn/uploads/2023/04/21/blog-web-logo-2.png" round={true} width="30px" height="30px" />
                  <View className="letter_item_header_content">
                    <Text className="letter_item_header_nickname">huangrx</Text>
                    <Text className="letter_item_header_date">{getCurrentTimeFormatted()}</Text>
                  </View>
                </View>
                <Text className="letter_item_content">你的存在让我的世界变得更加完整，我愿意与你一起走过每一个季节。</Text>
              </View>

              <View className="letter_item">
                <View className="letter_item_header">
                  <Image className="letter_item_header_icon" src="https://images.huangrx.cn/uploads/2023/04/21/blog-web-logo-2.png" round={true} width="30px" height="30px" />
                  <View className="letter_item_header_content">
                    <Text className="letter_item_header_nickname">huangrx</Text>
                    <Text className="letter_item_header_date">{getCurrentTimeFormatted()}</Text>
                  </View>
                </View>
                <Text className="letter_item_content">当云朵漫过天空，星星闪耀夜晚，我心中只有你。亲爱的，每时每刻都想与你共度，为你写下这段情书，表达我对你的深深思念。</Text>
              </View>
          
        </View>
      </View>
    </View>
  )
}

export default LoveLetter;