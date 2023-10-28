import React from 'react'
import style from './ArticleList.module.css'
import Card from './Card/Card'
export default function ArticleList() {
  return (
    //БУДУТ МАПИТЬСЯ АЙТЕМЫ CARD
    <div className={style.container}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

