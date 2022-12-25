import React from 'react'
import SidebarOption from './SidebarOption'
import '../styles/sidebar.css'

import { FaTwitter } from "react-icons/fa"
import { HiHome } from "react-icons/hi"
import { MdExplore } from "react-icons/md"
import { IoMdNotifications } from "react-icons/io"
import { FiMail } from "react-icons/fi"
import { BsFillBookmarkFill } from "react-icons/bs"
import { RiFileListFill } from "react-icons/ri"
import { HiUser } from "react-icons/hi"
import { BsThreeDots } from "react-icons/bs"

export default function Sidebar() {
  return (
    <aside id="sidebar">
      <header>
        <FaTwitter id='twitter-icon'/>
      </header>
      <div id='sidebar-option-container'>
        <SidebarOption optionName="Home" OptionIcon={HiHome}/>
        <SidebarOption optionName="Explore" OptionIcon={MdExplore}/>
        <SidebarOption optionName="Notifications" OptionIcon={IoMdNotifications}/>
        <SidebarOption optionName="Messages" OptionIcon={FiMail}/>
        <SidebarOption optionName="Bookmarks" OptionIcon={BsFillBookmarkFill}/>
        <SidebarOption optionName="Lists" OptionIcon={RiFileListFill}/>
        <SidebarOption optionName="Profile" OptionIcon={HiUser}/>
        <SidebarOption optionName="More" OptionIcon={BsThreeDots}/>
      </div>
      <div id='tweet-button-container'>
      <button id='tweet-button'>Tweet</button>
      </div>
    </aside>
    
  )
}
