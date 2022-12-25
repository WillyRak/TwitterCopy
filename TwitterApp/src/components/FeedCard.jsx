import React from 'react'
import FeedBar from './FeedBar'
import Tweet from './Tweet'

export default function FeedCard() {
  return (
    <section class='feed-container'>
      <FeedBar/>
      <Tweet/>
    </section>
    
  )
}
