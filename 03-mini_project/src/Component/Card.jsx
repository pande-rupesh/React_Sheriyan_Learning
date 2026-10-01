 import React from 'react'
 import { Bookmark } from 'lucide-react'
 const Card = (job) => {
  console.log(job)
   return (
     <div className="card">
      <div className="top">
        <img src={job.logo} alt={`${job.company} logo`} />
         <button>Save<Bookmark /></button>
      </div>
      <div className="center">
       <div className="tag1">
         <h3>{job.company}</h3>
        <span>/{job.posted}</span>
       </div>
          <div className="tag2">
            <h2>{job.title}</h2>
            <p>{job.schedule}</p>
            <p>{job.level}</p>
            
          </div>
      </div>
      <div className="bottom">
        <h2>{job.salary}</h2>
        <button>Apply Now</button>
      </div>
    </div>
   )
 }
 
 export default Card