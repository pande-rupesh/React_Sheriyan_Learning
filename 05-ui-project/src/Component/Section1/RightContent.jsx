import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id="right-content" className='w-2/3 p-6 h-full flex flex-nowrap gap-4 overflow-x-auto'>
        {props.users.map((elem,idx) => {
          console.log(idx)
          return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color} intro={elem.intro}/>;
        })}
      </div>
  )
}

export default RightContent