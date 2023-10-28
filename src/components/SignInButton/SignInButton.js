import React from "react";
import { Button, Space } from "antd";
import style from './SignInButton.module.css';
const SignInButton = () => (
  <Space wrap>
    <Button className={style.button}>Sign In
    </Button>
  </Space>
);
export default SignInButton;
