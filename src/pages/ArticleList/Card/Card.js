import React from 'react'
import style from './Card.module.css'

export default function Card() {
  return (

    <div className={style.item}>
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
  )
}
