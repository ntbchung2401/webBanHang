import React, { useState, useEffect } from "react";
import { Button, Form, Input, Alert } from "antd";
import "./Login.css";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="login__container">
      <div className="login">
        <Form
          name="login-form"
        >
          <p className="form-title">Welcome back!</p>
          <p className="welcome">
            {" "}
            Enter your email and password to login to login the system.
          </p>
          <p className="title">Email</p>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input placeholder="Enter your Email" />
          </Form.Item>
          <p className="title">Password</p>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Enter your Password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Sign In
            </Button>
          </Form.Item>
          <p className="welcome">
            {" "}
            If you don't have account,<Link to="/register">Click here</Link> to register.
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
