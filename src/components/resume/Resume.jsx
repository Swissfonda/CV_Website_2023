import React from 'react'
import ResumeCard from './ResumeCard'
import Title from '../layouts/Title'
import { schoolData } from './SchoolData'


const Resume = () => {
  return (
    <section
     id="resume"
     className='w-full pb-20 py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center'>
            <Title title='3 Years of experience' des="My Resume"/>
        </div>
        <div>
            <ul className='w-full grid grid-cols-3'>
                <li className='resumeLi'>Education</li>
                <li className='resumeLi'>Professional Skills</li>
                <li className='resumeLi'>Experience</li>


            </ul>

        </div>
        <div className='py-12'>
            <p className='text-sm tracking-[px]'>1998 - 2010</p>
            <h2 className='text-4xl font-bold'>Education Quality</h2>
        </div>
        <div className='mt-14 w-1/2 h-[1000px] border-l-[6px] border-l-black
        border-opacity-30 flex flex-col gap-10'>
        {schoolData.map((item,idx)=>(
            <ResumeCard
            key={idx}
            title={item.title}
            subtitle={item.subtitle}
            result={item.result}
            des={item.details}
            url={item.url}
            />
        ))
        
        
        }


        </div>
    </section>
  )
}

export default Resume