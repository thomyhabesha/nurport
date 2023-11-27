import React from 'react'
import './Contact.css' 
import Bgvector from '../../img/Vector.png'
function Contact() {
  return (
    <div className='contact_form'>
        
   <div className='cont_arrow'>
   
    {"-->"}
   </div>
    <div className='contact_vectir' style={{background:`url(${Bgvector})`, backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
<form>
<h1>Contact Me</h1>
<h2>Name</h2>
    <input type="text" className='inp' name="name"/>

    <h2>Email</h2>
    <input type="email" className='inp' name="email"/>
    <input type="submit" className='submit'/>
</form>
    </div>
    </div>
  )
}

export default Contact