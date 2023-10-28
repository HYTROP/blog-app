import React from 'react'
import CreateArticleButton from '../CreateArticleButton/CreateArticleButton'
import ButtonLogOut from '../ButtonLogOut/ButtonLogOut'
import style from './HeaderStyle.module.css';
import EditProfileButton from '../EditProfileButton/EditProfileButton';
import SignInButton from '../SignInButton/SignInButton';
import SignUpButton from '../SignUpButton/SignUpButton';

import { Routes, Route, Outlet, Link, Redirect } from "react-router-dom";

export default function Header() {
  return (
    <div className={style.container}>
      <h6 className={style.h1}>Realworld Blog</h6>
      <Link
        to={"/new-article"}
        className={style.linkWrapper}>
        <CreateArticleButton />
      </Link>

      <Link
        to={'/profile'}
        className={style.linkWrapper}>
        <EditProfileButton />
      </Link>

      <Link
        to={'/log-out'}
        className={style.linkWrapper}>
        <ButtonLogOut />
      </Link>

      <Link
        to={'/sign-in'}
        className={style.linkWrapper}>
        <SignInButton />
      </Link>

      <Link
        to={'/sign-up'}
        className={style.linkWrapper}>
        <SignUpButton />
      </Link>

    </div>
  )
}
