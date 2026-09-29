import React from 'react'
import './Card.css'
const Card = (Props) => {
  
  return (
    <div className='card'>
      <img src={Props.img} alt="" />
      <h1>{Props.name}</h1>
      <div className='Skills'>
        {Props.skills.join(', ')}
      </div>
      <button className='btn'>View Profile</button>
    </div>
  )
}

export default Card