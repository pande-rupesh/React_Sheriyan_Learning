import React from 'react'
import HeroText from './HeroText'
import ArraowText from './ArraowText'

const LeftContent = () => {
  return (
        <div className='h-full flex flex-col justify-between w-1/3'>
        <HeroText/>
        <ArraowText/>
    </div>
  )
}

export default LeftContent