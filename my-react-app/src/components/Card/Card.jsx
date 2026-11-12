import React from 'react'
import './Card.css'

const Card = ({ people }) => {
  return (
    <div className='card'>
        <img className="card-image" src="https://avatars.githubusercontent.com/u/153217779?v=4" alt="picture of Me" />
        <h2 className='card-title'>{people.name}</h2>
        <p className='card-desc'>{people.email}</p>
    </div>
  )
}

export default Card
