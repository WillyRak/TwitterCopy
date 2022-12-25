import React from 'react'
import * as MaterialDesign from "react-icons/hi"


export default function  SidebarOption({optionName, OptionIcon=<React.Fragment></React.Fragment>}) {
  return (
    <button href="#" id='sidebar-option' >
    <OptionIcon id='option-icon'/>    
        <span style={{paddingLeft: 10}}>{optionName}</span>
    </button>
  )
}
