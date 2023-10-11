import React from 'react'
import { useState, useEffect } from 'react';

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
    return (
        <>
        <div className='absolute'>
            <div className='absolute w-[250px] h-[250px] right-28 top-20 bg-slate-700 rounded-md '>
            </div>
            <div className="ml-[50px] ">
                <img className=" drop-shadow-xl w-[400px] h-[400px] mb-[650px] object-contain  hover:scale-110 ease-in duration-200"src='src/assets/images/Profile_Picture_V1.png'/>
            </div>
        </div>
        </>
    )
  } else if (screenWidth > 500){
    return (
        <>
        <div className='absolute'>
            <div className='absolute w-[250px] h-[250px] right-28 top-20 bg-slate-700 rounded-md '>
            </div>
            <div className="ml-[50px] ">
                <img className=" drop-shadow-xl w-[400px] h-[400px] mb-[650px] object-contain  hover:scale-110 ease-in duration-200"src='src/assets/images/Profile_Picture_V1.png'/>
            </div>
        </div>
        </>
    )
  }
}


const ProfilePicture = () => {
  return (
    <ResponsiveDiv/>
  )
}

export default ProfilePicture