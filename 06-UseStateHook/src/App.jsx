import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [count, setCount] = useState(0)

function increaseCount() {
  setCount(count + 1)
}
function decreaseCount() {
  setCount(count - 1)
}

  return (
    <>
    <h1>{count}</h1>
    <button onClick={increaseCount}>Increase</button>
    <button onClick={decreaseCount}>Decrease</button>
    </>
  )
}

export default App