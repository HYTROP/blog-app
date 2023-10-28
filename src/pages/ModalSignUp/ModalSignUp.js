import React from 'react';
import style from './ModalSignUp.module.css'
import { Button, Input, Divider } from 'antd';


const ModalSignUp = () => {

  return (
    <div className={style.container}>
      <h3>Create new account</h3>
      <div className={style.inputWrapper}>
        <div className={style.inputTitle}>
          Username
        </div>
        <Input className={style.input} placeholder='Username' />
      </div>
      <div className={style.inputWrapper}>
        <div className={style.inputTitle}>
          Email address
        </div>

        <Input className={style.input} placeholder='Email address' />
      </div>
      <div className={style.inputWrapper}>
        <div className={style.inputTitle}>
          Password
        </div>

        <Input className={style.input} placeholder='Password' />
      </div>
      <div className={style.inputWrapper}>
        <div className={style.inputTitle}>
          Repeate password
        </div>
        <Input className={style.input} placeholder='Password' />
      </div>

      <Divider className={style.divider} />

      <div className={style.labelCheckBox}>
        <label className={style.labelCheckBox}>
          <input type='checkBox'></input>
          I agree to the processing of my personal information
        </label>
      </div>

      <Button className={style.buttonCreate} type="primary" htmlType="submit">
        Create
      </Button>

      <div className={style.footer}>
        <span>Already have an account?
          &nbsp;
          <a href='' className={style.link}>
            Sign In.
          </a>
        </span>
      </div>

    </div >
  );
};
export default ModalSignUp;