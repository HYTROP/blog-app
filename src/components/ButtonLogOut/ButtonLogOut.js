import React from 'react';
import { Button, Space } from 'antd';
import style from './ButtonLogOut.module.css'
const ButtonLogOut = () => (
  <Space wrap>
    <Button className={style.btnLogOut}>Log Out</Button>
  </Space>
);
export default ButtonLogOut;