import { Text, View } from "@tarojs/components";
import { NavBar } from "@antmjs/vantui"
import Taro from "@tarojs/taro";
import "./index.css";

const Agreement = () => {
  const paddingTopNum = wx.getSystemInfoSync().statusBarHeight + 7;
  return (
    <View>
      <NavBar
        title="用户协议"
        leftArrow
        onClickLeft={() => Taro.navigateBack()}
        fixed={true}
        className="custom_header"
      />
      <View className="agreement_container" style={`paddingTop: ${paddingTopNum + 30}px; marginTop: 1rem`}>
        <View>
          <Text className="agreement_title">一、总则</Text>
          <View className="agreement_content">
            <Text userSelect={true}>1、用户在注册及使用前请认真阅读本协议，确保充分理解本协议中所有条款。除非您接受本协议所有条款，否则您无权注册、登录或使用本协议所涉服务。您的注册、登录、使用等行为将视为无条件接受本协议所有条款的约束。</Text>
            <Text userSelect={true}>2、除非另有明确规定，本产品所推出的新功能、新服务，均无条件的使用本协议。</Text>
            <Text userSelect={true}>3、我公司保留在任何时候修改本协议条款的权利，且无需另行通知。在我公司修改协议条款后，如果您不接受修改后的条款，请立即停止使用本产品提供的服务，继续使用本产品提供的服务将被视为接受修改后的协议。</Text>
          </View>
        </View>

        <View>
          <Text className="agreement_title">二、用户注册</Text>
          <View className="agreement_content">
            <Text userSelect={true}>1、用户应当同意本协议的全部条款并按照页面提示完成全部注册程序(未成年人应与法定监护人共同完成)。用户在注册过程中点击“下一步”按钮即表示完全接受本协议全部条款。</Text>
            <Text userSelect={true}>2、用户在使用本服务前需要注册一个本产品账号。本产品账号应当使用手机号码绑定注册，请用户使用尚未与本产品账号绑定且未被本产品根据本协议封禁的手机号码注册账号。本产品可以根据用户需求或产品需求对账号注册和绑定的方式进行更改，而无须事先通知用户。</Text>
            <Text userSelect={true}>3、用户在使用本产品服务过程中应保证各项服务业务所需信息的真实性，如果因信息不真实而引起的问题，以及问题发生所带来的后果，本公司不负任何责任。</Text>
            <Text userSelect={true}>4、在用户注册及使用本产品时，要搜集能识别用户身份的个人信息以便系统可以在必要时联系用户，或为用户提供更好的使用体验。系统搜集的信息包括但不限于用户的性别、年龄、出生日期、所在城市；系统同意对这些信息的使用将受限于用户个人隐私信息保护的约束。</Text>
          </View>
        </View>

        <View>
          <Text className="agreement_title">三、服务内容</Text>
          <View className="agreement_content">
            <Text userSelect={true}>1、本服务的具体内容由本产品根据实际情况提供，包括但不限于用户使用本产品等。本产品可以对提供的服务予以变更，且本产品提供的服务内容可能随时变更，用户将会收到关于服务变更的通知。</Text>
            <Text userSelect={true}>2、除非本协议另有其他明示规定，本公司所推出的新产品、新功能、新服务，均受到本协议条款之规范。</Text>
          </View>
        </View>

        <View>
          <Text className="agreement_title">四、服务变更、中断或终止</Text>
          <View className="agreement_content">
            <Text userSelect={true}>1、鉴于网络服务的特殊性(包括但不限于服务器的稳定性问题、恶意的网络攻击等行为的存在及其他无法控制的情形)，用户同意我公司有权随时中断或终止部分或全部的服务。</Text>
            <Text userSelect={true}>2、我公司需要定期或不定期地对提供服务的系统或相关设备进行检修或维护，如因此类情况而造成服务在合理时间内的中断，我公司无需为此承担任何责任。</Text>
            <View className="agreement_subtitle">
              <Text userSelect={true}>3、如发生下列任何一种情形，我公司有权随时变更、中断或终止向用户提供本协议项下的服务而无需对用户或任何第三方承担任何责任：</Text>
              <View className="agreement_sub_content">
                <Text userSelect={true}>(1)根据法律规定用户应提交真实信息，而用户提供的个人资料不真实、或与注册时信息不一致又未能提供合理证明；</Text>
                <Text userSelect={true}>(2)用户违反相关法律法规或本协议的约定；</Text>
                <Text userSelect={true}>(3)按照法律规定或有权机关的要求；</Text>
                <Text userSelect={true}>(4)出于安全的原因或其他必要的情形。</Text>
              </View>
            </View>
          </View>
        </View>

        <View>
          <Text className="agreement_title">五、用户个人隐私信息保护</Text>
          <View className="agreement_content">
            <Text userSelect={true}>1、依据法律的规定，我们将在特定情形下收集、使用和披露您的个人信息。以下条款描述了我们如何收集、使用和披露您的个人信息。</Text>
            <View className="agreement_subtitle">
              <Text>2、信息收集</Text>

              <Text className="agreement_sub_content" userSelect={true}>(1)用户提供，我们会对您直接提供的信息进行保存。比如：我们会记录您的注册信息、寻求客服或者其他和我们沟通的记录。记录信息的种类包括：头像、昵称、性别、出生日期、所在地区以及其他您选择提供的信息。我们收集、使用和披露个人信息是为了通过创建账户、识别用户、回应查询和邮件等方式来为您提供服务。当你接触或者使用我们的服务时，我们将自动收集您的信息包括：Log信息(我们记录所有您使用服务时的log信息，包括浏览器信息、使用时间、浏览的网页、IP地址及来源)。我们使用多种技术记录信息，包括但不限于：向您的移动设备种Cookies。Cookies是一些存在您的硬件上的小数据包，用以帮助我们提高服务的质量及您的使用体验，了解在哪些区域和功能上受欢迎，以及统计流量等。</Text>

            </View>
            <View className="agreement_subtitle">
              <Text>3、信息使用</Text>
              <View className="agreement_sub_content">
                <Text userSelect={true}>(1)除本隐私政策未载明或本隐私政策的更新未能首先通知您的情况下，您的个人信息将不会用于其他目的。</Text>
                <Text userSelect={true}>(2)匿名汇总统计数据不是我公司所定义的个人用户信息，我们将为多种目的，包括但不限于分析和使用模式的报告等，来保存和使用此类信息。我公司保留以任何目的或单方面许可第三方使用和披露匿名汇总统计数据的权利。</Text>
                <Text userSelect={true}>(3)您在本产品中上传的信息，有可能会损坏您或他人的合法权益，您必须充分意识此类风险的存在。您明确同意，自行承担因上传信息所存在的一切风险及后果，我公司无需承担任何责任。</Text>
              </View>
            </View>
            <View className="agreement_subtitle">
              <Text>4、法定披露</Text>
              <Text className="agreement_sub_content" userSelect={true}>虽然我们会尽最大努力保护用户隐私，但当我们有理由相信只有公开个人信息才能遵循现行司法程序、 法院指令或其他法律程序或者保护我公司、我公司用户或第三方的权利、财产或安全时，我们可能披露个人信息。</Text>
            </View>
            <View className="agreement_subtitle">
              <Text>5、信息安全</Text>
              <Text className="agreement_sub_content" userSelect={true}>我们会采取合理的实际及电子手段以及规程保障措施来保护您的个人信息。 虽然通过因特网信息传输数据并非100% 安全，但我们已经采取并将继续采取商业范畴内合理的努力来确保您的个人信息得到保护。</Text>
            </View>
            <View className="agreement_subtitle">
              <Text>6、未成年人隐私保护</Text>
              <Text className="agreement_sub_content" userSelect={true}>我公司重视对未成年人个人隐私信息的保护。我公司将依赖用户提供的个人信息判断用户是否为未成年人。任何18岁以下的未成年人注册账号或使用本服务应事先取得家长或其法定监护人(以下简称“监护人”)的书面同意。除根据法律法规的规定及有权机关的指示披露外，我公司不会使用向任何第三方透露未成年人的个人隐私信息。</Text>
            </View>
          </View>
        </View>

        <View>
          <Text className="agreement_title">六、内容规范</Text>
          <View className="agreement_content">
            <Text userSelect={true}>1、本项规范所述内容是指用户使用本服务过程中所制作、上载、复制、发布、传播的任何内容，包括但不限于账号头像、名称、个性签名等注册信息及认证资料，或文字、语音、图片、图文等发送、回复消息和相关链接页面，以及其他使用本产品账号或本服务所产生的内容。</Text>
            <View className="agreement_subtitle">
              <Text userSelect={true}>2、用户承诺使用本产品的服务时必须符合中华人民共和国有关法律法规，不得利用本产品的服务制作、上载、复制、发布、传播以下内容：</Text>
              <Text userSelect={true}>(1)反对宪法所确定的基本原则的；</Text>
              <Text userSelect={true}>(2)危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的； </Text>
              <Text userSelect={true}>(3)损害国家荣誉和利益的；</Text>
              <Text userSelect={true}>(4)煽动民族仇恨、民族歧视，破坏民族团结的；</Text>
              <Text userSelect={true}>(5)破坏国家宗教政策，宣扬邪教和封建迷信的；</Text>
              <Text userSelect={true}>(6)散布谣言，扰乱社会秩序，破坏社会稳定的；</Text>
              <Text userSelect={true}>(7)散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</Text>
              <Text userSelect={true}>(8)侮辱或者诽谤他人，侵害他人合法权益的；</Text>
              <Text userSelect={true}>(9)含有法律、行政法规禁止的其他内容的。</Text>
            </View>
            <View className="agreement_subtitle">
              <Text userSelect={true}>3、用户不得利用本产品账号或本服务制作、上载、复制、发布、传播下干扰本产品正常运营，以及侵犯其他用户或第三方合作权益的内容：</Text>
              <Text userSelect={true}>(1)含有任何性暗示的；</Text>
              <Text userSelect={true}>(2)含有辱骂、恐吓、威胁内容的；</Text>
              <Text userSelect={true}>(3)含有骚扰、垃圾广告、恶意信息、诱骗信息的；</Text>
              <Text userSelect={true}>(4)涉及他人隐私、个人信息或资料的；</Text>
              <Text userSelect={true}>(5)含有其他干扰本服务正常运营和侵犯其他用户或第三方合法权益的。</Text>
            </View>
          </View>
        </View>

        <View>
          <Text className="agreement_title">七、使用规则</Text>
          <View className="agreement_content">
            <Text userSelect={true}>1、用户在本服务中或通过本服务所传送、发布的任何内容并不反映或代表，也不得被视为反映或代表我公司的观点、立场或政策，我公司对此不承担任何责任。</Text>
            <View>
              <Text userSelect={true}>2、用户在使用本产品时，必须遵守中华人民共和国相关法律法规的规定，同意将不会利用本产品进行任何违法或不正当的活动，包括但不限于下列行为：</Text>
              <View className="agreement_sub_content">
                <Text userSelect={true}>(1)干扰或破坏有关服务，或与有关服务连接的任何服务器或网络，或与有关服务相关的任何政策、要求或规定；</Text>
                <Text userSelect={true}>(2)采集并存储涉及任何其他用户的个人信息，以用于任何被禁止的活动；</Text>
                <Text userSelect={true}>(3)故意或非故意违反任何相关的中国法律、法规、规章、条例等其他具有法律效力的规范。</Text>
              </View>
            </View>
            <Text userSelect={true}>3、用户须对利用本产品账号或本服务传送信息的真实性、合法性、无害性、准确性、有效性等全权负责，与用户所传播信息相关的任何法律责任由用户自行承担，与我公司无关。如因此给我公司或第三方造成损害的，用户应当依法予以赔偿。</Text>
            <Text userSelect={true}>4、本产品提供的服务中可能包括广告，用户同意在使用过程中显示本产品和第三方供应商、合作伙伴提供的广告。除法律法规明确规定外，用户应自行对该广告信息进行的交易负责，对用户因该广告信息进行的交易或前述广告商提供的内容或遭受的损失或损害，我公司不承担任何责任。</Text>
            <Text userSelect={true}>5、用户为使用本产品，须自行配备进入国际互联网所必需的设备，包括电脑、手机及其他与接入国际互联网有关的装置，并自行支付与此服务有关的费用。</Text>
          </View>
        </View>

        <View>
          <Text className="agreement_title">八、免责声明</Text>
          <View className="agreement_content">
            <Text userSelect={true}>1、对于经由本产品服务而传送的内容，我公司不保证前述内容的正确性、完整性或品质。用户在接受有关服务时，有可能会接触到令人不快、不适当或令人厌恶的内容。在任何情况下，我公司均不对任何内容负责，包括但不限于任何内容发生任何错误或纰漏以及衍生的任何损失或损害。用户使用上述内容，应自行承担风险。</Text>
            <Text userSelect={true}>2、用户明确同意其使用本产品所存在的风险及其后果将完全由其自己承担，我公司对用户不承担任何责任。如因用户违反有关法律、法规或本协议项下的任何条款而给任何其他第三人造成损失，用户同意承担由此造成的损害赔偿责任。</Text>
            <Text userSelect={true}>3、我公司尊重并保护用户的个人隐私权。但因恶意的网络攻击等行为及其他无法控制的情形，导致用户隐私信息泄露的，用户同意我公司不承担任何责任。</Text>
            <Text userSelect={true}>4、对于因电信系统或互联网网络故障、计算机故障、计算机系统问题或其它任何不可抗力原因而产生损失，我公司不承担任何责任，但将尽力减少因此给用户造成的损失和影响。</Text>
          </View>
        </View>

        <View>
          <Text className="agreement_title">九、知识产权声明</Text>
          <View className="agreement_content">
            <Text userSelect={true}>1、本产品服务中包含的任何文字、图表、音频、视频和软件(包括但不限于软件中包含的图表、动画、音频、视频、界面实际、数据和程序、代码、文档)等信息或材料均受著作权法、商标法和其它法律法规保护，未经相关权利人书面同意，用户不得以任何方式使用该信息或材料。</Text>
            <Text userSelect={true}>2、本协议未授予用户使用本产品任何商标、服务标记、标识、域名和其他显著品牌特征的权利，任何人不得擅自(包括但不限于：以非法的方式复制、传播、展示、镜像、上载、下载)使用，否则我公司将依法追究法律责任。</Text>
            <Text userSelect={true}>3、除本协议明确允许以外，用户不得以任何形式或任何方式对本产品部分或全部内容进行修改、出租、租赁、出借、出售、分发、复制、创作衍生品或用于任何商业用途。</Text>
          </View>
        </View>

        <View>
          <Text className="agreement_title">十、法律适用</Text>
          <View className="agreement_content">
            <Text userSelect={true}>1、本协议的订立、执行和解释及争议的解决均应适用中国法律并受中国法院管辖。如服务条款任何一部分与中华人民共和国法律相抵触，则该部分条款应按法律规定重新解释，部分条款无效或重新解释不影响其余条款法律效力。</Text>
            <Text userSelect={true}>2、用户和我公司一致同意本协议。在执行本协议过程中如发生纠纷，双方应友好协商解决；协商不成时，任何一方可直接向所在地的人民法院提起诉讼。</Text>
          </View>
        </View>

        <View>
          <Text className="agreement_title">十一、其他规定</Text>
          <View className="agreement_content">
            <Text userSelect={true}>1、本协议中的标题仅为方便而设，在解释本协议时应被忽略。</Text>
            <Text userSelect={true}>2、本协议及其修改权、最终解释权归我公司所有。</Text>
          </View>
        </View>

      </View>
    </View>
  )
}

export default Agreement;