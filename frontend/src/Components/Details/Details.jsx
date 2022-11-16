import React, { useState, useEffect } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode';
import { Link, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Popup from 'reactjs-popup';



export default function Details() {
  const [jobDetails, setJobDetails] = useState({})
  const [jobId, setJobId] = useState([])

  let { id } = useParams();
  console.log(id);

      useEffect(() => {
      // setJobId(id);
        // the route will be modified if we need a specific user's tweets ../tweets/${id}
        setJobId(id);
        // take the tweet list data & store it in a state setState(response)
        getdescription(id)
      }, [id])

      const getdescription = (id) => {
        console.log(id)
        axios.get(`http://localhost:4000/jobs/${id}`)
        .then(res => {
          console.log(res.data)
          setJobDetails(res.data)})
        .catch(err => console.log(err))
      }
   

  return (
     <div>
      <div>Description</div>
      {jobDetails ?
        <div key={jobDetails._id}>
           <p>Job Description:{jobDetails.description}</p>
           <Popup trigger={<button>Apply!</button>} position="right center">
             <div>Thank you!
             Your job application has been sent successfully.</div>
           </Popup>
        </div>
      :null}
       
         
     </div>  
  )
}

 
 