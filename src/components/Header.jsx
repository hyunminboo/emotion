import React from 'react'
import "./Header.css"
const Header = ({title, leftChild,rightChild}) => {
  return (
    <header className='Header'>
        <h1>부현민 일기장</h1>
        <div className="header_right">{rightChild}</div>
        <div className="header_center">{title}</div>
        <div className="header_left">{leftChild}</div>
        
    </header>
  )
}

export default Header