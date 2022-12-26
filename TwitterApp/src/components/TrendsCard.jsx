import React from 'react'
import { IoMdSettings } from "react-icons/io"
import TrendOption from './TrendOption'
import "../styles/trendsCard.css"

export default function TrendsCard() {
  return (
    <section class="trend-container">
      <header id='trend-header'>
        <p>Trends for you</p>
        <IoMdSettings id='settings-icon'/>
      </header>
      <div>
      <TrendOption trendHashtag="ecommerce"/>
      <TrendOption trendHashtag="apple"/>
      <TrendOption trendHashtag="uefa"/>
      <TrendOption trendHashtag="music"/>
      </div>
      <div id='trend-button'>
        <a>SEE MORE</a>
      </div>
    </section>
  )
}
