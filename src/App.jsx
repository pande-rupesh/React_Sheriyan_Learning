<<<<<<< HEAD
import React from 'react'
import Card from './Components/Card'
import './App.css'
const App = () => {
  return (
    <div className="Parent">
      <Card name='John Doe' skills={['HTML', 'CSS', 'JavaScript']} img="https://i.pravatar.cc/140?img=1" />
      <Card name='Jane Smith' skills={['Python', 'Django', 'PostgreSQL']} img="https://i.pravatar.cc/140?img=2" />
      <Card name='Bob Johnson' skills={['React', 'Node.js', 'MongoDB']} img="https://i.pravatar.cc/140?img=3" />
      <Card name='Alice Williams' skills={['Vue.js', 'Angular', 'TypeScript']} img="https://i.pravatar.cc/140?img=4" />
      <Card name='Charlie Brown' skills={['Java', 'Spring', 'Hibernate']} img="https://i.pravatar.cc/140?img=5" />
      <Card name='Diana Miller' skills={['C#', 'ASP.NET', 'SQL Server']} img="https://i.pravatar.cc/140?img=6" />
      <Card name='Ethan Davis' skills={['PHP', 'Laravel', 'MySQL']} img="https://i.pravatar.cc/140?img=7" />
      <Card name='Fiona Wilson' skills={['Go', 'Gin', 'PostgreSQL']} img="https://i.pravatar.cc/140?img=8" />
    </div>
  )
}

export default App
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
>>>>>>> d17878185ab7b012213852290fe6cc1a5ed75b79
