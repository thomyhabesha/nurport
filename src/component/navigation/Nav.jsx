import React,{useRef} from 'react'
import Data from '../../Data'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  const navRef=useRef();

  const showNavbar=()=>{
    navRef.current.classList.toggle("responsive_nav") 
  }
  return (
    <div className="na_nav">
        <h1>Nur</h1>
        <div className="right_nav">
          <div className='nav_links' ref={navRef}>
<Link to="/" >Home</Link>
<Link to="/accomplish" >Accomplishments</Link>
<button className='nav-btn nav-close-btn' onClick={showNavbar}> close</button>
          </div>
          <div className="nav_socialmedia">
            <a href="https://www.instagram.com/nur.a.abdo/"><img src={Data[0]} alt=""/></a>
            <a href="https://www.linkedin.com/in/nurhussein-ali-713796237/" ><img src={Data[1]} alt=""/></a>
            <a href="https://www.facebook.com/profile.php?id=100085869013804" > <img src={Data[2]} alt=""/></a>
          </div>
        </div>
        <button className='nav-btn' onClick={showNavbar}>   menu</button>
    </div>
  )
}

export default Nav