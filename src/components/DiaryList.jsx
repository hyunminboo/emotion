import React from 'react'
import "./DiaryList.css"
import DiaryItem from './DiaryItem'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const DiaryList = ({ data }) => {
  const nav = useNavigate()
  const [sortType, setSortType] = useState('latest')
  
  const onChangeSortType = (e) => {
    setSortType(e.target.value)
  }

  const getSortedData = () => {
    return data.toSorted((a, b) => {
        if (sortType === 'oldest') {
            return Number(a.createdDate) - Number(b.createdDate)
        } else {
            return Number(b.createdDate) - Number(a.createdDate)
        }
    })
  }

  return (
    <div className='DiaryList'>
      <div className="menu-bar">
        <select value={sortType} onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된순</option>
        </select>
        <Button
          onClick={() => nav('/new')}
          text={"새 일기 쓰기"} type={"POSITIVE"} 
        />
      </div>
      <div className="list-wrapper">
        {getSortedData().map((item) => (
          <DiaryItem key={item.id} {...item}/>
        ))}
      </div>
    </div>
  )
}

export default DiaryList