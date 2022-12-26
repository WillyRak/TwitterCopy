import React from 'react'
import * as MaterialDesign from "react-icons/hi"


export default function  SidebarOption({optionName, OptionIcon=<React.Fragment></React.Fragment>}) {
  return (
    <span id='sidebar-option'>
      <button href="#" >
        <OptionIcon id='option-icon'/>    
        <span style={{paddingLeft: 10}}>{optionName}</span>
      </button>
    </span>
    
  )
}
