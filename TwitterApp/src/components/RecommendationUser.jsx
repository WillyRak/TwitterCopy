import React from 'react'

export default function RecommendationUser({userName, userNickname}) {
  return (
    <div>
        <img src="#" style={{width:50, height:50}}/>
        <p><strong>{userName}</strong></p>
        <p>{userNickname}</p>
        <button>Follow</button>
    </div>
  )
}
