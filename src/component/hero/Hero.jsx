import React from 'react'
import './Hero.css'
import Bgimg from '../../img/entoto.jpg'
import Nurphoto from '../../img/photo_2023-11-07_18-55-57.jpg'
function Hero() {
  return (
    <div className='hero_comp' style={{background:`url(${Bgimg})`, backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",height:"100vh"}}>
<div className="hero_cont">
    <img src={Nurphoto} />
    <div className="hero_texts">
        <h2> Nurhussein Ali</h2>
        <hr/>
        <p>A passionate and driven  future diplomat.</p>
        <p>I am a visionary young man with a Driven  burning desire to make a lasting impact on my beloved country, </p>
        <p>I seeks to showcase the rich culture, history, and potential of my nation to the world. </p>
        <p>share stories, traditions, and achievements of Ethiopia </p>
    </div>
</div>
    </div>
  )
}

export default Hero