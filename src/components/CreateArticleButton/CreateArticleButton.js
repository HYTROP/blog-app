import React from "react";
import { Button, Space } from "antd";
import ButtonStyle from "./CreateArticleButton.module.css";
const ButtonCreate = () => (
  <Space wrap>
    <Button className={ButtonStyle.button}>Create article</Button>
  </Space>
);
export default ButtonCreate;
