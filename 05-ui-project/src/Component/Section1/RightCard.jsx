import React from 'react'

import RightCardText from './RightCardText'
const RightCard = (props) => {
  console.log(props.id)
  return (
    <div className='w-75 h-full overflow-hidden shrink-0 relative rounded-4xl card-animation'>
      <img className='w-full h-full object-cover ' src={props.img} alt="" />

      <RightCardText tag={props.tag} color={props.color} intro={props.intro} id={props.id} />

    </div>
  )
}

export default RightCard