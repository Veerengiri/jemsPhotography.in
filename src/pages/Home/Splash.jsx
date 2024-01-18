import React, { useState } from 'react'

function Splash() {
    const [isVisible,setIsVisible]=useState(true);
    setTimeout(() => {
        setIsVisible(false);
    }, 3000);
  return (isVisible &&
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100dvh',width:"100dvw",backgroundColor:'black',color:'white',position:'absolute',top:'0',left:"0",zIndex:'100'}}>
      Welcome to Jems Studio
    </div>
  )
}

export default Splash
