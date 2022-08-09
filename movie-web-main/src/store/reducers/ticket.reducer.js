import {
  DAT_VE,
  SET_TICKET_MANAGEMENT,
} from "store/constants/ticket.constants";

const initialState = {
  chiTietPhongVe: {},
  danhSachGheDangDat: [],
};
export const TicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TICKET_MANAGEMENT: {
      state.chiTietPhongVe = action.payload;
      return { ...state };
    }

    case DAT_VE: {
      // cập nhật danh sách ghế đang đặt
      console.log("action", action);
      let danhSachGheCapNhat = [...state.danhSachGheDangDat];
      let index = danhSachGheCapNhat.findIndex(
        (gheDD) => gheDD.maGhe === action.gheDuocChon.maGhe
      ); //ghế DD: ghế Đang Đặt
      if (index != -1) {
        // nếu tìm thấy ghế dc chọn trong mảng có nghĩa là trước đó đã có click => xoá đi
        danhSachGheCapNhat.splice(index, 1);
      } else {
        danhSachGheCapNhat.push(action.gheDuocChon);
      }
      return { ...state, danhSachGheDangDat: danhSachGheCapNhat };
    }

    default:
      return { ...state };
  }
};
