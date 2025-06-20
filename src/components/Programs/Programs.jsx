import React from 'react'
import './Programs.css'
import scholarships from '../../assets/program-2.png'
import agriculture from '../../assets/agric.jpeg'
import refugee from '../../assets/refugee.jpeg'
import healthcare from '../../assets/health.jpeg'
import engineering from '../../assets/engineering.jpeg'
import scholarships_icon from '../../assets/reading-book.png'
import agriculture_icon from '../../assets/plant.png'
import refugee_icon from '../../assets/r_help.png'
import healthcare_icon from '../../assets/healthcare.png'
import engineering_icon from '../../assets/construction.png'


const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={scholarships} alt="" />
        <div className="caption">
          <img src={scholarships_icon} alt="" />
          <p>Scholarships for education</p>
        </div>
      </div>
      <div className="program">
        <img src={agriculture} alt="" />
        <div className="caption">
          <img src={agriculture_icon} alt="" />
          <p>Agricultural services</p>
        </div>
      </div>
      <div className="program">
        <img src={refugee} alt="" />
        <div className="caption">
          <img src={refugee_icon} alt="" />
          <p>Refugee, Homeless and Orphan Help</p>
        </div>
      </div>
      <div className="program">
        <img src={healthcare} alt="" />
        <div className="caption">
          <img src={healthcare_icon} alt="" />
          <p>Healthcare Services</p>
        </div>
      </div>
      <div className="program">
        <img src={engineering} alt="" />
        <div className="caption">
          <img src={engineering_icon} alt="" />
          <p>Engineering Services</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
