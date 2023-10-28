import React from 'react';
import style from './ModalEditProfile.module.css'
import { Button, Input, Divider } from 'antd';


const ModalEditProfile = () => {

  return (
    <div className={style.container}>

      <h3>Edit Profile</h3>

      <div className={style.inputWrapper}>
        <div className={style.inputTitle}>
          Username
        </div>
        {/* CURRENT USERNAME */}
        <Input className={style.input} placeholder='Username' />
      </div>
      <div className={style.inputWrapper}>
        <div className={style.inputTitle}>
          Email address
        </div>
        {/* CURRENT EMAIL */}

        <Input className={style.input} placeholder='Email address' />
      </div>

      <div className={style.inputWrapper}>
        <div className={style.inputTitle}>
          New password
        </div>
        <Input className={style.input} placeholder='New password' />
      </div>

      <div className={style.inputWrapper}>
        <div className={style.inputTitle}>
          Avatar image(url)
        </div>
        <Input className={style.input} placeholder='Avatar image' />
      </div>


      <Button className={style.buttonCreate} type="primary" htmlType="submit">
        Save
      </Button>

    </div >
  );
};
export default ModalEditProfile;