import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { postRegister } from "apis/user-management.apis";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
export default function Registerpage() {
  let history = useNavigate();

  const fetchData = async (data) => {
    let resutl = await postRegister(data);
    return resutl;
  };

  const onFinish = async (values) => {
    let dataRigister = { ...values, maNhom: "GP01" };

    let result = await fetchData(dataRigister);
    console.log(result);

    if (result.statusCode === 200) {
      message.success("Đăng ký thành công");

      setTimeout(() => {
        history("/login");
      }, 2000);
    } else {
      message.error("Đăng ký thất bại");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className=" h-screen p-20 "
    style={{background:"linear-gradient(#0250c5,#d43f8d)"}}>
      <div className="bg-white p-10 rounded">
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
            label="Email"
            name="email"
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
            label="Số điện thoại"
            name="soDt"
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
            label="Họ tên"
            name="hoTen"
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
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Đăng kí
            </Button>
          </Form.Item>
          <Link to="/login">Đăng nhập nếu đã có tài khoản</Link>
        </Form>
      </div>
    </div>
  );
}
