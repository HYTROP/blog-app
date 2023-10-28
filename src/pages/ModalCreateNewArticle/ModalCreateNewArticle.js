import React from 'react';
import style from './ModalCreateNewArticle.module.css'
import { Button, Input } from 'antd';
const { TextArea } = Input;


const ModalCreateNewArticle = () => {

  return (
    <div className={style.container}>

      <h3>Create new article</h3>

      <div className={style.inputWrapper}>
        <div className={style.inputTitle}>
          Title
        </div>
        {/* CURRENT USERNAME */}
        <Input className={style.input} placeholder='Title' />
      </div>
      <div className={style.inputWrapper}>
        <div className={style.inputTitle}>
          Short description
        </div>
        {/* CURRENT EMAIL */}

        <Input className={style.input} placeholder='Short description' />
      </div>

      <div className={style.inputWrapper}>
        <div className={style.inputTitle}>
          Text
        </div>
        <TextArea autoSize={{ minRows: 6, maxRows: 24 }} className={style.inputText} placeholder='Text'
        />
      </div>

      <div className={style.inputWrapper}>
        <div className={style.inputTitle}>
          Tags
        </div>
        <Input className={style.inputTag} placeholder='Tag' />

        <Button danger className={style.buttonDelete} onClick={'delete Tag'}>
          Delete
        </Button>
        <Button className={style.buttonAddTag} type="default" onClick={'AddTag'}>
          Add tag
        </Button>
      </div>


      <Button className={style.buttonSend} type="primary" htmlType="submit">
        Send
      </Button>

    </div >
  );
};
export default ModalCreateNewArticle;