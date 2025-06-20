import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We ensure we provide help for a better livelihood</h1>
        <p>The general objective of Happy Living for All International Ltd is to improve the overall well-being and quality of life for underserved communities by providing modern healthcare, promoting sustainable agriculture, offering technical skills training, supporting economic empowerment initiatives, delivering affordable housing and engineering services, facilitating access to education through scholarships, and caring for vulnerable populations such as orphans and the homeless.</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
