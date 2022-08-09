import { Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserListActionService } from "store/redux-toolkit/slices/nguoiDungSlice";
import { theadColums } from "Utils/user-management.util";
export default function UserManagementPage() {
  let dispatch = useDispatch();
  let userList = useSelector((state) => state.nguoiDungSlice.dsNguoiDung);
  console.log("userList", userList);

  useEffect(() => {
    !userList.length && dispatch(getUserListActionService());
  }, []);
  const getDataTable = (userList) => {
    let content = (
      <div className="space-x-3">
        <button className="rounded px-7 py-2 bg-red-500 text-white">xoá</button>
        <button className="rounded px-7 py-2 bg-blue-500 text-white">
          sửa
        </button>
      </div>
    );
    return userList.map((item) => {
      return { ...item, action: content };
    });
  };
  return (
    <div className="w-full p-5">
      UserManagement.page
      <div className="container mx-auto" style={{ width: 1320 }}>
        <Table columns={theadColums} dataSource={getDataTable(userList)} />
      </div>
    </div>
  );
}
