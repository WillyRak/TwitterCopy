import React from 'react'
import * as MaterialDesign from "react-icons/hi"


export default function  SidebarOption({optionName, OptionIcon=<React.Fragment></React.Fragment>}) {
  return (
    <div href="#" id='sidebar-option'>
    <OptionIcon id='option-icon'/>    
        <p style={{paddingLeft: 10}}>{optionName}</p>
    </div>
  )
}
