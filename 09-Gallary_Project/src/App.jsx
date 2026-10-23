import React, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

    const [result, setresult] = useState([])
    const [text, setText] = useState(1)

  async function data (){
    const data= await fetch(`https://picsum.photos/v2/list?page=${text}&limit=12`)
    const result=await data.json()
    setresult(result)
    console.log(result)
  }

  useEffect(()=>{
    data()
  },[text])

  return (
    <div className='p-5'>
       <div className=" p-5">
      <button onClick={data} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded transition duration-300 ease-in-out">
      Click me
    </button>
    </div>
    
    <div className='h-auto flex flex-wrap gap-10'>
      {
        result.map((t)=>{
          return <div  
            key={t.id}
             className="w-48 bg-gray-400   shadow-lg"
             >
             <img className=' w-full h-42  object-cover ' src={t.download_url} alt="" />
          <h2 className='text-white text-center'>{t.author}</h2>
          </div>
        })
      }
    </div>
      <div className="flex flex-wrap p-3 justify-center items-center gap-4">
        <button onClick={()=>{
          if(text>1){
            setText(text-1)
          }
          
        }} className='bg-amber-400 text-white text-2xl   px-7'>Prev</button>
        <h2>Page {text}</h2>
        <button onClick={()=>{
          setText(text+1)
        }} className='bg-amber-400 text-white text-2xl   px-7'>Next</button>
      </div>
    </div>
  )
}

export default App