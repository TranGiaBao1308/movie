import Sider from "antd/lib/layout/Sider";
import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <header>
        <h1>Header Admin</h1>
      </header>
      <div className="flex">
        <section className="w-64 bg-red-500">
          <Sider />
        </section>
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;

