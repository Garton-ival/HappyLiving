import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/africa-agriculture.png'
import user_2 from '../../assets/scholar.jpeg'
import user_3 from '../../assets/vocation.png'
import user_4 from '../../assets/elderly.png'

const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

const slideForward = ()=>{
  if(tx > -50){
    tx -= 25;
  }
  slider.current.style.transform = `translate(${tx}%)`;
}

const slideBackward = ()=>{
   if(tx < 0){
    tx += 25;
  }
  slider.current.style.transform = `translate(${tx}%)`;
}


  return (
    <div className='testimonials'>
      <img className='next-btn' src={next_icon} alt="" onClick={slideForward}/>
      <img className='back-btn' src={back_icon} alt="" onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Waikesa Jackson</h3>
                  <span>Community Farmer, Mbale</span>
                </div>
              </div>
              <p>Thanks to Happy Living's agricultural training, I was able to double my harvest last season. The advice on soil management and crop rotation changed everything for my family. We now have enough to eat and even sell!</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Nanyanzi Dorris</h3>
                  <span>Single Mother & Scholarship Beneficiary, Kampala</span>
                </div>
              </div>
              <p>When I had lost hope of sending my daughter to school, Happy Living came through with a full scholarship. Today, she is thriving in secondary school. This organization truly uplifts the forgotten.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Mugeni Prince</h3>
                  <span>Youth Trainee - Vocational Skilling Program</span>
                </div>
              </div>
              <p>I joined their hands-on training in carpentry and now I am running my own small workshop. They didn't just give me skills, they gave me confidence and a future.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Ainaho Ernest</h3>
                  <span>Elderly Beneficiary - Health Care Outreach.</span>
                </div>
              </div>
              <p>The health services they brought to our village saved many lives. For the first time, we received checkups, medicine, and health education right at our doorsteps.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
