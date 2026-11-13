import React from 'react'
import './Card.css'

const Card = ({ title }) => {
  return (
    <div className='card'>
        <h2 className='card-title'>{title}</h2>
        <ul className='card-list'>
            <li className='card-item'>Item 1</li>
            <li className='card-item'>Item 2</li>
            <li className='card-item'>Item 3</li>
        </ul>
    </div>
  )
}

export default Card
