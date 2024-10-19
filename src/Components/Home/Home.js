import React from 'react'
import './Home.css'

export const Home = () => {
  return (
    <div className='main'>
        <div className='alignment'> 
          <h1 className='head1'>
                HOSPITAL MANAGEMENT SYSTEM
            </h1>
            <h5 className='head2'>
            (A Hospital Management System (HMS) is software designed to manage the operations 
            of a hospital, including patient records, appointments, billing)
            </h5>
            <a href='login'><button className='loginbtn'>Login</button></a>
        </div>
    </div>
  )
}
