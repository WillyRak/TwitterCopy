import React from 'react'
import { HiHome } from "react-icons/hi" 


export default function  SidebarOption({optionName}) {
  return (
    <div href="#" style={{display: "flex", alignItems: "center"}}>
        <HiHome/>
        <p style={{paddingLeft: 10}}>{optionName}</p>
    </div>
  )
}
