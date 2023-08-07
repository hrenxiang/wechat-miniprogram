import { Text, View } from "@tarojs/components";
import { NavBar } from "@antmjs/vantui"
import Taro from "@tarojs/taro";
import "./index.css";

const Privacy = () => {
  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;
  return (
    <View>
      <NavBar
        title="隐私政策"
        leftArrow
        onClickLeft={() => Taro.navigateBack()}
        fixed={true}
        className="custom_header"
      />
      <View className="privacy_container" style={`paddingTop: ${paddingTopNum + 30}px; marginTop: 1rem`}>
        <View className="privacy_article_content">
          <Text>本指引是茜茜和阿黄的恋爱小屋小程序开发者 （以下简称“开发者”）为处理你的个人信息而制定。</Text>

          <View className="privacy_article_item">
            <Text className="privacy_title">1. 开发者处理的信息</Text>
            <Text>根据法律规定，开发者仅处理实现小程序功能所必要的信息。</Text>
            <Text>为了展示微信昵称、头像，开发者将在获取你的明示同意后，收集你的微信昵称、头像。</Text>
            <Text>开发者 读取你的剪切板，用于复制开发者的微信号、电话号等。</Text>
          </View>

          <View className="privacy_article_item">
            <Text className="privacy_title">2. 你的权益</Text>
            <Text>2.1 关于你的个人信息，你可以通过以下方式与开发者联系，行使查阅、复制、更正、删除等法定权利。</Text>
            <Text>邮箱:huang.rx.life@hotmail.com</Text>
          </View>

          <View className="privacy_article_item">
            <Text className="privacy_title">3. 开发者对信息的存储</Text>
            <Text>3.1 开发者承诺，除法律法规另有规定外，开发者对你的信息的保存期限应当为实现处理目的所必要的最短时间。</Text>
          </View>

          <View className="privacy_article_item">
            <Text className="privacy_title">4. 信息的使用规则</Text>
            <Text>4.1 开发者将会在本指引所明示的用途内使用收集的信息</Text>
            <Text>4.2 如开发者使用你的信息超出本指引目的或合理范围，开发者必须在变更使用目的或范围前，再次以邮件方式告知并征得你的明示同意。</Text>
          </View>

          <View className="privacy_article_item">
            <Text className="privacy_title">5. 信息对外提供</Text>
            <Text>5.1 开发者承诺，不会主动共享或转让你的信息至任何第三方，如存在确需共享或转让时，开发者应当直接征得或确认第三方征得你的单独同意。</Text>
            <Text>5.2 开发者承诺，不会对外公开披露你的信息，如必须公开披露时，开发者应当向你告知公开披露的目的、披露信息的类型及可能涉及的信息，并征得你的单独同意。</Text>
          </View>

          <View className="privacy_article_item">
            <Text className="privacy_title">6. 你认为开发者未遵守上述约定，或有其他的投诉建议、或未成年人个人信息保护相关问题，可通过以下方式与开发者联系；或者向微信进行投诉。</Text>
            <Text>邮箱 : huang.rx.life@hotmail.com</Text>
          </View>
        </View>
        <View className="privacy_article_time">
          <Text>更新日期：2023-08-01</Text>
          <Text>生效日期：2023-08-01</Text>
        </View>
      </View>
    </View>
  )
}

export default Privacy;