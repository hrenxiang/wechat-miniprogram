import { UserProfile } from "../../type/user";

// parameterActions.js
export const SET_OPENID = 'SET_OPENID';

export const SET_USER_PROFILE = 'SET_USER_PROFILE';

export const setOpenId = (parameter) => ({
    type: SET_OPENID,
    openid: parameter,
});

export const setUserProfile = (parameter: UserProfile) => ({
  type: SET_USER_PROFILE,
  userProfile: parameter,
});