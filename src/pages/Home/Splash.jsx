import React, { useEffect, useState } from 'react'

function Splash() {
    const [isVisible,setIsVisible]=useState(true);
    const {mainSlider,setMainSlider}=useContext(MyContext);
    useEffect(()=>{
      setTimeout(() => {
          setIsVisible(false);
      }, 3000);
    },[mainSlider])
  return ((isVisible || mainSlider) &&
    <div style={{backgroundImage:"url('/icon.png')",backgroundRepeat:'no-repeat',backgroundSize:'cover', display:'flex',justifyContent:'center',alignItems:'flex-start',height:'100dvh',width:"100dvw",backgroundColor:'black',color:'white',position:'fixed',top:'0',left:"0",zIndex:'100'}}>
      <p style={{fontWeight:'bold',textShadow:'3px 3px black',fontSize:'2.5rem',marginTop:"50px"}}>Welcome to Jems Photography</p>
    </div>
  )
}

export default Splash
