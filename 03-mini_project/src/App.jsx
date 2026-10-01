import React from 'react'
import Card from './Component/Card'
import './App.css'

const jobs = [
  { company: 'Meta', logo: 'https://www.google.com/s2/favicons?domain=meta.com&sz=128', posted: '5 days ago', title: 'Senior UI/UX Designer', schedule: 'Full Time', level: 'Senior Level', salary: '$12/Hour' },
  { company: 'Google', logo: 'https://www.google.com/s2/favicons?domain=google.com&sz=128', posted: '2 days ago', title: 'Product Designer', schedule: 'Full Time', level: 'Mid Level', salary: '$18/Hour' },
  { company: 'Microsoft', logo: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=128', posted: '1 week ago', title: 'Frontend Developer', schedule: 'Full Time', level: 'Senior Level', salary: '$20/Hour' },
  { company: 'Apple', logo: 'https://www.google.com/s2/favicons?domain=apple.com&sz=128', posted: '3 days ago', title: 'Visual Designer', schedule: 'Contract', level: 'Junior Level', salary: '$15/Hour' },
  { company: 'Netflix', logo: 'https://www.google.com/s2/favicons?domain=netflix.com&sz=128', posted: '6 days ago', title: 'Motion Designer', schedule: 'Full Time', level: 'Mid Level', salary: '$17/Hour' },
  { company: 'Amazon', logo: 'https://www.google.com/s2/favicons?domain=amazon.com&sz=128', posted: '4 days ago', title: 'UX Researcher', schedule: 'Full Time', level: 'Senior Level', salary: '$19/Hour' },
  { company: 'Adobe', logo: 'https://www.google.com/s2/favicons?domain=adobe.com&sz=128', posted: '2 weeks ago', title: 'UI Designer', schedule: 'Contract', level: 'Junior Level', salary: '$14/Hour' },
  { company: 'Spotify', logo: 'https://www.google.com/s2/favicons?domain=spotify.com&sz=128', posted: '1 day ago', title: 'Product Designer', schedule: 'Full Time', level: 'Mid Level', salary: '$18/Hour' },
  { company: 'Airbnb', logo: 'https://www.google.com/s2/favicons?domain=airbnb.com&sz=128', posted: '5 days ago', title: 'Experience Designer', schedule: 'Full Time', level: 'Senior Level', salary: '$21/Hour' },
  { company: 'Uber', logo: 'https://www.google.com/s2/favicons?domain=uber.com&sz=128', posted: '3 days ago', title: 'Interaction Designer', schedule: 'Contract', level: 'Junior Level', salary: '$16/Hour' },
]

const App = () => {
  return (
    <div className="cards">
      {jobs.map((job) => (
        <Card
          key={job.company}
          company={job.company}
          logo={job.logo}
          posted={job.posted}
          title={job.title}
          schedule={job.schedule}
          level={job.level}
          salary={job.salary}
        />
      ))}
    </div>
  )
}

export default App