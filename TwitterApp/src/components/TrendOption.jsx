import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md"

export default function TrendOption({trendHashtag}) {
  return (
    <div class="trend-option-container">
        <span><strong>#{trendHashtag}</strong></span>
        <p>71.4k Tweets</p>
        <MdKeyboardArrowDown class="arrow-icon"/>
    </div>
  )
}
