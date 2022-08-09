import axios from "axios";
import { axiosClient } from "configs/axios.configs";
import  ThongTinDatVe  from "_core/models/ThongTinDatVe";

export const getBannerList = async () => {
  try {
    return await axiosClient.get("/QuanLyPhim/LayDanhSachBanner");
  } catch (error) {
    throw error;
  }
};

export const getMovieList = () => {
  return axiosClient.get("/QuanLyPhim/LayDanhSachPhim");
};
export const getDetailMovie = (maPhim) => {
  return axiosClient.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
};

export const getCinemaSystem = () => {
  return axiosClient.get("/QuanLyRap/LayThongTinLichChieuHeThongRap");
};
export const getService = () => {
  return axiosClient.get("/QuanLyRap/LayThongTinHeThongRap");
};
export const getBookTicket = (maLichChieu) => {
  return axiosClient.get(
    `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
  );
};
export const getTicketInfo = (thongTinDatVe) => {
  return axiosClient.post("/QuanLyDatVe/DatVe",thongTinDatVe);
};
