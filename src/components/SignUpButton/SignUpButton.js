import React from 'react';
import { Button, Space } from "antd";
import style from './SignUpButton.module.css';

const SignUpButton = () => {

  return (
    <>
      <Space wrap>
        <Button className={style.button}>
          Sign Up
        </Button>
      </Space>
    </>
  )
};
export default SignUpButton;
