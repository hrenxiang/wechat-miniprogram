export interface UserProfile {
  avatar: string;
  nickname: string;
  mobile: string;
  role: string;
  openid: string;
  id: number;
}

export interface UserInfoParam {
  avatar: string;
  nickname: string;
  openid: string;
}

export interface UserBindParam {
  mobile: string;
  password: string;
  openid: string;
  smsCode: string;
}

export interface UserLoginParam {
  login_type: string;
  mobile: string;
  password: string;
}

export enum LoginType {
  "NORMAL"='normal',
  "WECHAT"='wechat'
}

export enum RoleType {
  "GUEST"='guest',
  "ADMIN"='admin'
}

export const EmailRegExp = new RegExp(
  '^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$',
);

export const MobileRegExp = new RegExp(
  '^1(?:(?:3[\\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\\d])|(?:9[189]))\\d{8}$',
);

export const PasswordRegExp = new RegExp(
  '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$',
);