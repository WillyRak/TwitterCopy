import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md"

export default function TrendOption({trendHashtag}) {
  return (
    <div>
        <p><strong>#{trendHashtag}</strong></p>
        <p>71.4k Tweets</p>
        <MdKeyboardArrowDown/>
    </div>
  )
}
