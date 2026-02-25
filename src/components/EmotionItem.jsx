import React from 'react'
import './EmotionItem.css'
import { getEmotionimage } from '../util/getEmotionimage'

const EmotionItem = ({emotionId, emotionName, isSelected, onClick}) => {
  return (
    <div onClick={onClick}
    className={`EmotionItem ${isSelected ? `item_on_${emotionId}` : ''}`}>
        <img src={getEmotionimage(emotionId)} alt={emotionName} />
        <div>
            {emotionName}
        </div>
    </div>
  )
}

export default EmotionItem