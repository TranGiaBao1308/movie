import { getBookTicket, getTicketInfo } from "apis/movie-management.apis";

import { SET_TICKET_MANAGEMENT } from "store/constants/ticket.constants";
import ThongTinDatVe from "_core/models/ThongTinDatVe";

export const TicketAction = (maLichChieu) => {
  return async (dispatch) => {
    console.log("maLichChieu", maLichChieu);
    try {
      const result = await getBookTicket(maLichChieu);
      console.log("result", result);
      console.log("result.content", result.content.thongTinPhim);
      if (result.statusCode === 200) {
        dispatch({
          type: SET_TICKET_MANAGEMENT,
          payload: result.content,
        });
      }
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };
};
export const datVeAction = (thongTinDatVe) => {
  return async (dispatch) => {
    try {
      const result = await getTicketInfo(thongTinDatVe);
      console.log("result", result.content);
    } catch (error) {
      throw error;
    }
  };
};
