import { SET_HE_THONG_QUAN_LY_RAP } from "store/constants/service.constants";

const initialState = {
  heThongRapChieu: [],
};
export const QuanLyRapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HE_THONG_QUAN_LY_RAP: {
      state.heThongRapChieu = action.heThongRapChieu;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
