import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaYoutube,FaInstagram,FaLinkedin,FaArrowDown} from 'react-icons/fa'
import ProfilePicture from './ProfilePicture'

const Main = () => {
  return (
    <div id='main'>
      
        <img className='w-full h-screen object-cover'src='src/assets/images/Me_Background_Page.jpg' />
        
        <div className='w-full h-screen absolute top-0 left-0 bg-black/80'>
            <div className='flex h-full flex-row'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-100'>I'm
                    <span className='text-red-500 capitalize'> Lawrence Sumiller</span>
                    </h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-200'>I'm a 
                    <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Videographer',
                3000, // wait 1s before replacing "Mice" with "Hamsters"
                'Photographer',
                3000,
                'Web Developer',
                3000,
                'Social Media Creator',
                3000
            ]}
            wrapper="span"
            speed={50}
            style={{  fontWeight: 'bold', fontSize: '1em', paddingLeft:'5px' }}
            repeat={Infinity}
            />

                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <FaYoutube color="white" className='cursor-pointer' size={20}/>
                        <FaInstagram color='white' className='cursor-pointer' size={20} />
                        <FaLinkedin color='white' className='cursor-pointer' size={20} />
                    </div>
                    <div  className='flex justify-center mt-10 sm:max-w-none max-w-[200px] w-full'>
                    <h1 className='sm:text-5xl text-4xl pt-7 font-bold text-gray-100  hover:scale-110 ease-in duration-200 '>Resume</h1>
                      </div>
                    <div className='flex justify-center mt-10 sm:max-w-none max-w-[200px] w-full' >
                      <FaArrowDown className='text-gray-50 text-2xl animate-bounce' size={50}/>
                    </div>
                    
                    <ProfilePicture/>


              </div>





            </div>

            



            
        
        </div>

        
    </div>
    

  )
}

export default Main