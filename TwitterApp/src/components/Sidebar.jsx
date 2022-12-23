import React from 'react'
import SidebarOption from './SidebarOption'

import { FaTwitter } from "react-icons/fa"

export default function Sidebar() {
  return (
    <aside id="sidebar">
      <FaTwitter/>
      <SidebarOption optionName="Home"/>
      <SidebarOption optionName="Explore"/>
      <SidebarOption optionName="Notifications"/>
      <SidebarOption optionName="Messages"/>
      <SidebarOption optionName="Bookmarks"/>
      <SidebarOption optionName="Lists"/>
      <SidebarOption optionName="Profile"/>
      <SidebarOption optionName="More"/>

    </aside>
    
  )
}
