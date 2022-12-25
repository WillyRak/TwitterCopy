import React from 'react'
import { AiOutlineReload } from "react-icons/ai"
import RecommendationUser from './RecommendationUser'

export default function RecommendationCard() {
  return (
    <section class="recommendation-container">
      <div>
        <p>You should follow</p>
        <AiOutlineReload/>
      </div>
      <div>
        <RecommendationUser userName="Kate Lingard" userNickname="@katie14"/>
        <RecommendationUser userName="Crazy Snowman" userNickname="@snow_man"/>
        <RecommendationUser userName="Sharapova" userNickname="@sharapovac"/>
      </div>
      <div>
        <p>SEE ALL</p>
      </div>
    </section>
  )
}
