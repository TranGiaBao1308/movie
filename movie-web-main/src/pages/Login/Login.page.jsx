import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { postLogin } from "apis/user-management.apis";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { postUserLoginAction } from "store/actions/user.action";
import { userLocalService } from "localService/localService";

export default function LoginPage() {
  let history = useNavigate();
  let dispatch = useDispatch();

  //useEffect(() => {
  //  let userLocal = userLocalService.getUserInfor();
  //  console.log({ userLocal });
  //  userLocal.maLoaiNguoiDung = "QuanTri" && history("/admin/users");
  //}, []);
  const fetchData = async (data) => {
    let resutl = await postLogin(data);
    return resutl;
  };

  const onLoginSuccess = () => {
    message.success("Đăng nhập thành công");
    setTimeout(() => {
      history("/");
    }, 2000);
  };
  const onLoginFail = () => {
    message.error("Đăng nhập thất bại");
  };

  const onFinish = async (values) => {
    console.log(values);

    dispatch(postUserLoginAction(values, onLoginSuccess, onLoginFail));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className=" h-screen p-20 "
    style={{background:"linear-gradient(#e66465, #9198e5)"}}>
      <div className="  bg-white p-10 mt-20 rounded">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 24,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Tài khoản"
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="matKhau"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              className="bg-blue-600 text-white rounded"
              htmlType="submit"
            >
              Đăng nhập
            </Button>
          </Form.Item>
          <Link to="/register">Đăng kí nếu chưa có tài khoản</Link>
        </Form>
      </div>
    </div>
  );
}
