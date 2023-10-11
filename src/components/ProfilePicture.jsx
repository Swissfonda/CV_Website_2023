import React from 'react'
import React, { useState, useEffect } from 'react';

function ResponsiveDiv() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 2Xl 
  if (screenWidth > 1536) {
    
    return (
        <>
        <div className='2xl:block hidden absolute w-[500px] h-[500px] ml-[540px] mb-20 bg-slate-700 rounded-md '>
        </div>
        <div className="absolute ml-[500px] ">
            <img className="2xl:block hidden drop-shadow-xl w-[650px] h-[650px] object-contain  hover:scale-110 ease-in duration-200"src='src/assets/images/Profile_Picture_V1.png'/>
        </div>
        </>
    )

 // xl
  } else if (screenWidth > 768) {
    return <div>Medium Screen Div</div>;
  } else {
    return <div>Small Screen Div</div>;
  }
}


const ProfilePicture = () => {
  return (
    <ResponsiveDiv/>
  )
}

export default ProfilePicture