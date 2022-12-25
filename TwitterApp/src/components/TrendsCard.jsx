import React from 'react'
import { IoMdSettings } from "react-icons/io"
import TrendOption from './TrendOption'

export default function TrendsCard() {
  return (
    <section class="trend-container">
      <div style={{display:"flex", alignItems:"center"}}>
        <p>Trends for you</p>
        <IoMdSettings/>
      </div>
      <div>
      <TrendOption trendHashtag="ecommerce"/>
      <TrendOption trendHashtag="apple"/>
      <TrendOption trendHashtag="uefa"/>
      <TrendOption trendHashtag="music"/>
      </div>
      <div>
        <p>SEE MORE</p>
      </div>
    </section>
  )
}
