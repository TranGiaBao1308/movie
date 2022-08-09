import { axiosClient } from "configs/axios.configs";

export const getUserList = () => {
  return axiosClient.get("/QuanLyNguoiDung/LayDanhSachNguoiDung");
};
