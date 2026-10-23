import React from 'react'

const App = () => {
function prevent(e){
  e.preventDefault();
}

  return (
    <>
    <form onSubmit={prevent}>

    <input type="text" placeholder="Enter your name" />
    <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default App