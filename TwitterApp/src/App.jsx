import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import FeedCard from './components/FeedCard'
import UserCard from './components/UserCard'
import TrendsCard from './components/TrendsCard'
import RecommendationCard from './components/RecommendationCard'
import NavCard from './components/NavCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Sidebar/>
      <main>
        <header>
          <Navbar/>
        </header>
        <div id='main-container'>
          <UserCard userName="John Ramsey" userNickname="@john_ram"/>
          <FeedCard/>
          <TrendsCard/>
          <NavCard/>
          <RecommendationCard/>
        </div>
      </main>

    </div>
  )
}

export default App
