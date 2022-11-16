import React, { useState, useEffect } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode';
import { Link, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap';



export default function UserHome() {

  const [jobs, setJobs] = useState([])

      useEffect(() => {
        // the route will be modified if we need a specific user's tweets ../tweets/${id}

        // take the tweet list data & store it in a state setState(response)
        axios.get(`http://localhost:4000/jobs`)
        .then(res => setJobs(res.data))
        .catch(err => console.log(err))

        getJobs()
      }, [])

      const getJobs = () => {
        axios.get('http://localhost:4000/jobs')
        .then(res => setJobs(res.data))
        .catch(err => console.log(err))
      }

       

  return (
     <div>
      <div>Jobs</div>

      {jobs.length ? jobs.map(job =>
        <div key={job._id}>
          <p>
            Job title: <Link to={`/job/${job._id}`}> {job.jobTitle} </Link>
            <Link to={`/job/${job._id}`}>{job.title}</Link>
          </p>
          <p>Company Name: {job.companyName}</p>
        </div>
        )
      :null}
     </div>  
  )
}

 