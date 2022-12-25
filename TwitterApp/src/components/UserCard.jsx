import React from 'react'
import userFace from '../images/black-man-face.jpg'
import { MdLocationOn } from "react-icons/md"
import { GiWorld } from "react-icons/gi"

export default function UserCard({userName, userNickname}) {
  return (
    <section class="user-container">
      <img src={userFace} style={{width:50, height:50}}/>
      <p><b>{userName}</b></p>
      <p>{userNickname}</p>
      <div style={{display:"flex", alignItems:"center"}}>
        <MdLocationOn/>
        <p>Los Angeles</p>
        <GiWorld/>
      </div>
      <p>multidisciplinary Photographer focused on travel and nature content</p>
      <div id='user-data-container'>
        <p>Tweets</p>
        <p>Followers</p>
        <p>Following</p>
        <p>847</p>
        <p>4.2k</p>
        <p>524</p>
      </div>
    </section>
  )
}
