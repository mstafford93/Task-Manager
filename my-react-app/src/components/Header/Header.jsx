import React from 'react'
import './Header.css'
import TextChange from '../TextChange/TextChange'

const Header = () => {
  return (
    <div className='header'>
      <h1>My Task Manager</h1>
      <TextChange />
    </div>
  )
}

export default Header
