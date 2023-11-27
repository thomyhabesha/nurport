import React from 'react'
import Accbg from '../../img/photo_2023-11-07_20-33-13.jpg'
import AccCard from './AccCard.jsx'
import Data from './Data.jsx'
import './Accomp.css'

function Accomp() {
  return (
    <div className='acc_comp' style={{background:`url(${Accbg})`, backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>
{ 
   Data.map(item=>{
    return(
    <AccCard items={item}/>
    )
}
)}

    </div>
  )
}

export default Accomp