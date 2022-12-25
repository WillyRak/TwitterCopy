import React from 'react'
import { FiSearch } from "react-icons/fi" 
import UserInfo from './UserInfo'
import '../styles/navBar.css'

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <a>About</a>
            </li>
            <li>
                <a>Help</a>
            </li>
        </ul>
        <div>
            <FiSearch/>
            <input placeholder='Search on Twitter'></input>
        </div>
        <UserInfo userName="John"/>
    </nav>
  )
}
