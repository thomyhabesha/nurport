import React from 'react'
import Fb from '../../img/facebook.png'
import Lind from '../../img/linkden-removebg-preview.png'
import Insta from '../../img/insta-removebg-preview.png'


import './Footer.css'

function Footer() {
  return (
    <div className='footer_comp'>
<h1>Nur</h1>
<div className='copyright'> 
  <p>&copy; All right reserved Nurhussein Ali</p>
</div>


<div className="footer_socialmedia">
            <a href="" ><img src={Fb} alt=""/></a>
            <a href="" ><img src={Insta} alt=""/></a>
            <a href="" > <img src={Lind} alt=""/></a>
          </div>
    </div>
  )
}

export default Footer