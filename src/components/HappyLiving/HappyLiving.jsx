import React from 'react'
import './HappyLiving.css'
import gallery_1 from '../../assets/healthservice.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/housing.jpg'
import gallery_4 from '../../assets/farmer.png'
import white_arrow from '../../assets/white-arrow.png'

const HappyLiving = () => {
  return (
    <div className='happy'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default HappyLiving
