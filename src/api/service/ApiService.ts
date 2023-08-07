import { get, post } from "../Api";
import { UserBindParam, UserInfoParam, UserLoginParam } from "../../type/user";
import { QueryPageParam } from "../../type/daily";

const TIAN_API_KEY = "2d996e30eeaa6836ae58c17d06713bfa";

const DEVELOPMENT_BASE_URL = "http://localhost:8080"
const PRODUCTION_BASE_URL = "https://api.huangrx.cn";
export const BASE_URL = DEVELOPMENT_BASE_URL;

export const acquireWeather = () => {
  return post(
    'https://apis.tianapi.com/tianqi/index',
    {
      "key": `${TIAN_API_KEY}`,
      "city": "101180112",
      "type": "1"
    },
    {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  );
}

export const jscode2session = (code: string) => {
  return get(
    `${BASE_URL}/user/wx/jscode2session`,
    {
      "code": `${code}`
    }
  );
}

export const saveUser = (param: UserInfoParam) => {
  return post(
    `${BASE_URL}/user/wx/save`,
    {
      "avatar": `${param.avatar}`,
      "nickname": `${param.nickname}`,
      "openid": `${param.openid}`
    }
  );
}

export const acquireUser = (openid: string) => {
  return get(
    `${BASE_URL}/user/wx/acquire`,
    {
      "openid": `${openid}`
    }
  );
}

export const bindMobile = (param: UserBindParam) => {
  return post(
    `${BASE_URL}/user/wx/bind`,
    {
      "mobile": `${param.mobile}`,
      "password": `${param.password}`,
      "openid": `${param.openid}`,
      "sms_code": `${param.smsCode}`
    }
  );
}

export const sendSms = (mobile: string) => {
  return get(
    `${BASE_URL}/user/send/sms`,
    {
      "mobile": `${mobile}`
    }
  );
}

export const login = (param: UserLoginParam) => {
  return post(
    `${BASE_URL}/login`,
    {
      "mobile": `${param.mobile}`,
      "password": `${param.password}`,
      "login_type": `${param.login_type}`
    }
  );
}

export const logout = (accessToken: string) => {
  return get(
    `${BASE_URL}/user/logout`,
    undefined,
    {
      'Authorization': `Bearer ${accessToken}`
    }
  );
}

export const acquireTimeline = (param: QueryPageParam) => {
  return post(
    `${BASE_URL}/timeline/acquire/pull`,
    {
      "page_num": param.page_num,
      "page_size": param.page_size
    }
  );
}

export const acquireLoveLetter = (param: QueryPageParam) => {
  return post(
    `${BASE_URL}/letter/acquire`,
    {
      "page_num": param.page_num,
      "page_size": param.page_size
    }
  );
}

export const acquireMemorial = (param: QueryPageParam) => {
  return post(
    `${BASE_URL}/memorial/acquire`,
    {
      "page_num": param.page_num,
      "page_size": param.page_size
    }
  );
}

export const saveLoveLetter = (id: number, content: string, accessToken: string) => {
  return post(
    `${BASE_URL}/letter/save`,
    {
      "id": id,
      "content": content
    }, {
    'Authorization': `Bearer ${accessToken}`
  }
  );
}

export const saveMemorial = (title: string, description: string, cover: string, memorialDate: string, accessToken: string) => {
  return post(
    `${BASE_URL}/memorial/save`,
    {
      "title": title,
      "description": description,
      "cover": cover,
      "memorial_date": memorialDate
    }, {
    'Authorization': `Bearer ${accessToken}`
  }
  );
}

export const saveDaily = (tittle: string, content: string, illustration: string, createTime: string, accessToken: string) => {
  return post(
    `${BASE_URL}/timeline/save`,
    {
      "tittle": tittle,
      "content": content,
      "illustration": illustration,
      "create_time": createTime
    }, {
    'Authorization': `Bearer ${accessToken}`
  }
  );
}