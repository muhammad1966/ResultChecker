import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'

export const Home = () => {
  return (
    <div className='home-div'>
      <div className='home-content-div'>
        <div className='home-content-1'></div>
        <div className='home-content-2'></div>
        <div className='home-content-text'>
          <h1>
              Access Your Exam Scores, Academic Grades, and Test Results Instantly and Securely from Anywhere at Any Time!
          </h1>
          <p>The administration of Near East University does not provide this service and is not affiliated with it. This service was created independently by the developer as part of a programming project.<Link to='about' className='rm'>Read more</Link></p>
          <button className='cr-btn' onClick={() => {
            window.location = '../'
          }}>Check Result</button>
        </div>
      </div>
      <div className='maroon'></div>
      <div className='white'></div>
      
    </div>
  )
}
