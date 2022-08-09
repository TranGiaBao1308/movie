import { userLocalService } from "localService/localService";
import {
  SET_THONG_TIN_NGUOI_DUNG,
  SET_USER_INFOR,
} from "store/constants/user.constants";

let initialState = {
  userInfor: userLocalService.getUserInfor(),
  thongTinNguoiDung: {},
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_INFOR: {
      state.userInfor = payload;
      return { ...state };
    }
    case SET_THONG_TIN_NGUOI_DUNG: {
      console.log(payload);
      state.thongTinNguoiDung = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
