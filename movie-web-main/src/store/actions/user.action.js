import { layThongTinNguoiDung, postLogin } from "apis/user-management.apis";
import { userLocalService } from "localService/localService";
import {
  SET_THONG_TIN_NGUOI_DUNG,
  SET_USER_INFOR,
} from "store/constants/user.constants";

export const postUserLoginAction = (data, onSuccess, onFail) => {
  return async (dispatch) => {
    try {
      const result = await postLogin(data);
      dispatch({
        type: SET_USER_INFOR,
        payload: result.content,
      });
      if (result.statusCode === 200) {
        userLocalService.setUserInfor(result.content);
        onSuccess();
      } else {
        onFail();
      }
    } catch (error) {
      return error;
    }
  };
};

export const layThongTinNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      const result = await layThongTinNguoiDung();
      
      if (result.statusCode === 200) {
        dispatch({
          type: SET_THONG_TIN_NGUOI_DUNG,
          payload: result.content,
        });
      }
    } catch (error) {
      return error;
    }
  };
};
