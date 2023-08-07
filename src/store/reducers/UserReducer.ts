import { RoleType, UserProfile } from "../../type/user";
import { SET_OPENID, SET_USER_PROFILE } from "../action/UserActions";

// blogParameterReducer.js
interface UserState {
  openid: string;
  userProfile: UserProfile;
  acquireAvatarFlag: boolean;
}

const initialState = {
  openid: '',
  userProfile: {
    avatar: '',
    nickname: '',
    mobile: '',
    role: RoleType.GUEST,
    openid: '',
    id: -1
  },
  acquireAvatarFlag: true
};

const UserReducer = (state: UserState = initialState, action) => {
  switch (action.type) {
    case SET_OPENID:
      return { ...state, openid: action.openid };
    case SET_USER_PROFILE:
      return { ...state, userProfile: action.userProfile };
    default:
      return state;
  }
};

export default UserReducer;