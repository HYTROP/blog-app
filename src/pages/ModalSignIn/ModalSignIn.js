import React from 'react';
import style from './ModalSignIn.module.css'
import { Button, Input } from 'antd';


const ModalSignUp = () => {

  return (


    <div className={style.container}>
      <h3>Sign In</h3>

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

      <Button className={style.buttonCreate} type="primary" htmlType="submit">
        Create
      </Button>

      <div className={style.footer}>
        <span>Don't have an account?
          &nbsp;
          <a href='' className={style.link}>
            Sign Up.
          </a>
        </span>
      </div>
    </div >




  );
};
export default ModalSignUp;