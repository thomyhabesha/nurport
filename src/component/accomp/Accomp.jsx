import React from 'react'
import Accbg from '../../img/photo_2023-11-07_20-33-13.jpg'
import AccCard from './AccCard.jsx'
import Data from './Data.jsx'
import './Accomp.css'

function Accomp() {
  return (
    <div className='acc_comp' >
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