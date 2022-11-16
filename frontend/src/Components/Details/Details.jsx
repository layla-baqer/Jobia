import React, { useState, useEffect } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode';
import { Link, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import './Details.css'



export default function Details() {
  const [jobDetails, setJobDetails] = useState({})
  const [jobId, setJobId] = useState([])
  const [openModal, setOpenModal] = useState(false)

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
      <div className='title'>Detail</div>

      <div className='main-container'>
        <div className='right-container'></div>
        <div className='center-container'>
          <div className='user-home-line'></div>
            {jobDetails ?
              <div className='desc-container' key={jobDetails._id}>
                <div className='job-desc-name'>Job Description</div>
                <div>{jobDetails.description}</div>
                {/* <Popup trigger={<button>Apply!</button>}>
                  <div>Thank you!
                  Your job application has been sent successfully.</div>
                </Popup> */}
                <div className='modal-button-container'><button className='open-modal-button' onClick={()=>{setOpenModal(true)}}>Apply!</button></div>
                {openModal && <>
                <div className='modal-background'>
                  <div className='modal-container'>
                    <div className='modal-header'><button className='close-modal-button' onClick={()=>{setOpenModal(false)}}>X</button></div>
                    <div className='modal-message'>Thank you!
                    Your job application has been sent successfully.</div>
                    </div>
                  </div>
                  </>
                  }
                </div>
            :null}
        </div>
        <div className='left-container'></div>
      </div>
     </div>  
  )
}

 
 