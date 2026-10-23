import React from 'react'
import Navbar from './Navbar'
import Page1Contenet from './Page1Contenet'

const Section1 = (props) => {
  console.log(props.users)
  return (
    <div className='w-full h-screen '>
       <Navbar/>
       <Page1Contenet users={props.users}/>
    </div>
  )
}

export default Section1