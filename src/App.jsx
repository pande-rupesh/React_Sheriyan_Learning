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