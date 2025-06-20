import React from 'react'
import './About.css'
import about_img from '../../assets/abouthlail.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img className='about-img' src={about_img} alt="" />
         <img className='play-icon' src={play_icon} alt="" onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT HAPPY LIVING FOR ALL INTERNATIONAL</h3>
        <h2>We stand with one another and develop together with a smile</h2>
        <p>Happy Living for All International Ltd is dedicated to transforming lives through health, agriculture, education, housing, and spiritual support. We are driven by a holistic approach to human development that meets physical, economic, and spiritual needs. Our mission is to bring modern, accessible health care to every community, improve food quality for better health, combat poverty, and uplift housing standards for the underprivileged.</p>
        <p>We provide a wide range of services including agricultural advisory and promotion, healthcare outreach, technical skills training, and the construction of affordable housing. We also focus on empowering communities through economic support groups, offering scholarships for underprivileged learners, and adopting and supporting orphans and the homeless. Our programs are designed to create sustainable change by addressing the root causes of poverty and inequality.</p>
        <p>At the core of our work is a deep commitment to spreading the Good News of our Lord Jesus Christ. We believe in restoring dignity and purpose to every individual we reach. Whether through skilling youth, sheltering the homeless, or supporting struggling families, Happy Living for All International stands as a beacon of hope; serving with compassion, integrity, and a firm belief in God's love for all.</p>
      </div>
    </div>
  )
}

export default About
