import React from 'react'
import { useState } from 'react'
const App = () => {
const [Title, setTitle] = useState("")
const [Details, setDetails] = useState("")
const [Task, setTask] = useState([])
function handleSubmit(e) {
    e.preventDefault();
    const CopyTask=[...Task]
    CopyTask.push({Title,Details})
    setTask(CopyTask)

    console.log(Task)
    setTitle("")
    setDetails("")
}

  return (
    <div className='lg:flex min-h-screen bg-black text-black'>
      <form onSubmit={(e)=>{
          handleSubmit(e)
      }} className='lg:w-1/2 items-start  flex  flex-col gap-5 p-10'>
        <input className='w-full bg-white  px-5 py-2 rounded' type="text" placeholder='Enter Your Name' 
        
        value={Title}
        onChange={(e) => setTitle(e.target.value)}
      />


        <textarea className='w-full bg-white  px-5 py-2 rounded' placeholder='Enter Your Note' 
          value={Details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>


        <button className='w-full bg-white  px-5 py-2 rounded active:bg-gray-500' type="submit">Add Note</button>
      </form>
       <div className='lg:border-l-2 min-h-0 lg:w-1/2 p-10'>
       <div className='flex flex-wrap content-start gap-5 mt-6 lg:h-[90%] lg:overflow-auto'>
        {Task.map((item, index) => {
          return (
            <div key={index} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]" >
              <h1 className='text-lg font-bold'>{item.Title}</h1>
              <p className='text-sm mt-2'>{item.Details}</p>
              <button className='text-red-500 hover:text-red-700' onClick={() => {
                const CopyTask = [...Task]
                CopyTask.splice(index, 1)
                setTask(CopyTask)
              }}>Delete</button>
            </div>
          )
        })}
         </div>
       </div>

    </div>
  )
}

export default App