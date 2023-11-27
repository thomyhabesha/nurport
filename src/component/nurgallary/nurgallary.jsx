import React from 'react'
import Data from './Data.jsx'
import Gallarycard from './Gallarycard'
import Hope from "../../img/hope.jpg"
import Hope2 from "../../img/IMG_20220831_122832_974-1.jpg"
import Bgimg from "../../img/thired-layer.png"

import './Nurgallary.css'

function nurgallary() {
  
        return(
          <div>
          <div className='gallary_comp' style={{background:`url(${Bgimg})`, backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>

            {
            Data.map((items)=>{
                return(
                    
                <Gallarycard item={items}/>
                   
                )
            })}
            
            </div>

            <div className='gallary_comp2' style={{background:`url(${Bgimg})`, backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>
<div className='sec_gal_left' style={{background:`url(${Hope})`, backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>
<div className="gallary_text2" >
        <h1>Speech at Hope Ethiopia</h1>
        <p>" Social media campaign for youth people "</p>
    </div>
</div>
<div className='sec_gal_left sec_gal_right' style={{background:`url(${Hope2})` ,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>

</div>

            </div>
          </div>
  )
}

export default nurgallary