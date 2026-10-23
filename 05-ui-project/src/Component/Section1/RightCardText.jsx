import React from 'react'
import { MoveRight } from 'lucide-react'
const RightCardText = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='font-semibold h-12 w-12 flex items-center justify-center bg-white text-xl rounded-full'>{props.id + 1}</h2>
        <div className='mt-auto'>
          <p className='text-white text-xl text-shadow-2xs mb-6'>{props.intro}</p>
          <div className='flex justify-between'>
            <button style={{ backgroundColor: props.color }} className=' rounded-4xl px-8 py-2 text-white font-medium'>{props.tag}</button>
            <button className='bg-blue-400 rounded-4xl px-8 py-2 text-white font-medium'><MoveRight /></button>
          </div>
        </div>
      </div>
  )
}

export default RightCardText