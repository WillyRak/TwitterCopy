import React from 'react'
import userFace from '../images/black-man-face.jpg'

export default function UserInfo({userName}) {
  return (
    <div id='navbar-user'>
        <p>Hey, <b>{userName}</b>!</p>
        <img src={userFace} style={{width:50, height:50}}/>
    </div>
  )
}
