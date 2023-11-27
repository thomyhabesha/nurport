import React,{useEffect} from 'react'
import './About.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Bg2 from '../../img/nur11.jpg'


function About() {
useEffect(()=>{
AOS.init();
AOS.refresh();
},[]);


  return (
    <div className='about_comp'>
<div className="left_about"  style={{background:`url(${Bg2})`, backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"}}>
    <img src={Bg2} />
</div>
<div className="right_about" data-aos="fade-left" data-aos-duration="3000">
    <h1>About me</h1>
    <p>Hello, I am Nurhussein Ali. committed to breaking down barriers and bridging the gap
         between Ethiopia and the global community. Throughmy work, i aims to shed light on the
          untapped potential and hidden gems that lie within the heart of this beautiful nation. 
          my journey is one of inspiration, resilience, and unwavering optimism. 
          I strives to make Ethiopia a household name, not just within the continent but across the globe. 
          </p>
</div>
    </div>
  )
}

export default About