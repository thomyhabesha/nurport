
import React,{useEffect} from 'react'
import AOS from 'aos'
  import 'aos/dist/aos.css'
  
  
  function Gallarycard({item}) {
    
  useEffect(()=>{
  AOS.init();
  AOS.refresh();
  },[]);
  
  
  return (
    <div>
    <div className="gallary_card" data-aos="fade-right"  data-aos-duration="2000" style={{background:`url(${item.nurpic})`, backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>
    <div className="gallary_text" data-aos="fade-left" data-aos-duration="2000" >
        <h1>{item.headtext}</h1>
        <p>{item.text}</p>
    </div>
</div>
    </div>
  )
}

export default Gallarycard