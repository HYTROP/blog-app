import React from 'react'
import style from './ArticleItem.module.css'

export default function ArticleItem() {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h5 className={style.title}>SOME TITLE</h5>
        <div>💛 LIKES && NUMBER</div>
        <div>TAGS</div>
        <span>PREVIEW OF POST</span>
        <div>
          USER NAME
          <div>AVATAR IMG
            <img src='' alt=''></img>
          </div>
          <div>DATE OF POST</div>
        </div>
      </div>
      <div className={style.description}>
        <span>DESCRIBTION OF ARTICLE</span>
      </div>
    </div>
  )
}
