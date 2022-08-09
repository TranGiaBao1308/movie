import axios from "axios";
import { axiosClient } from "configs/axios.configs";

export const postRegister = async (data) => {
  try {
    return await axiosClient.post("/QuanLyNguoiDung/DangKy", data);
  } catch (error) {
    return error;
  }
};
export const postLogin = async (data) => {
  try {
    return await axiosClient.post("/QuanLyNguoiDung/DangNhap", data);
  } catch (error) {
    return error;
  }
};
export const layThongTinNguoiDung = async () => {
  try {
    return await axiosClient.post("/QuanLyNguoiDung/ThongTinTaiKhoan");
  } catch (error) {
    return error;
  }
};
