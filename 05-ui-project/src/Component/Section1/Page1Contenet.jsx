import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Contenet = (props) => {
  return (
    <div className='  flex items-center gap-10 h-[90vh] px-18'>
        <LeftContent/>
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Contenet