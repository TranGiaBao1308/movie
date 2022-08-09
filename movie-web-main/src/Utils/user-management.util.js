import { Tag } from "antd";

export const theadColums = [
  {
    title: "Tài khoản",
    dataIndex: "taiKhoan",
    key: "taiKhoan",
  },
  {
    title: "Họ tên",
    dataIndex: "hoTen",
    key: "hoTen",
  },
  {
    title: "email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Số điện thoại",
    dataIndex: "soDt",
    key: "soDt",
  },
  {
    title: "Loại người dùng",
    dataIndex: "maLoaiNguoiDung",
    key: "maLoaiNguoiDung",
    render: (text) => {
      if (text === "QuanTri") {
        return <Tag color="red">Quản trị</Tag>;
      } else {
        return <Tag color="green">Người dùng</Tag>;
      }
    },
  },
  {
    title: "Thao tác",
    dataIndex: "action",
    key: "action",
  },
];
