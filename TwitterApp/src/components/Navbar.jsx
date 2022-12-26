import React from 'react'
import { FiSearch } from "react-icons/fi" 
import UserInfo from './UserInfo'
import '../styles/navbar.css'

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Help</a>
            </li>
        </ul>
        <div id='search-bar-container'>
            <FiSearch/>
            <input placeholder='Search on Twitter'></input>
        </div>
        <UserInfo userName="John"/>
    </nav>
  )
}
