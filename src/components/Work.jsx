import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {   
        year: 2021,
        title: 'Medien Assistent - DSV',
        url: 'https://adventisten.ch/',
        duration: 'Current',
        details:
            'Creating, Editing, Finalizing and Publishing Videos for the Deutsch Schweizerische Verein der Sieben Tags Adventisten. Currently working on different projects for the different division within the company making their ideas come to reality',
    },

    {  
        year: 2020,
        title: '3D Animator - Sycoforge',
        url: 'https://return-to-nangrim.com/en/home',
        duration: 'Current',
        details:
            'Created animations and animation Pipelines for the game called Return to Nangrim. I animated from Humanoids to 4 leg creatures. Prototyped and tested different Motion Capture suit for our Animation Pipeline.',
    },

    {
        year: 2018,
        title: 'Front End developer - ABC4IT',
        url: 'https://www.abc4it.com/cms/',
        duration: '6 Months',
        details:
            'Maintained the website called waedi.ch with the latest events & news',
    },


    {
        year: 2014,
        title: 'Applikationsentwickler - Verix GmbH ',
        url: '',
        duration: '2 Year',
        details:
            'Developed UI for different companys like Bico & ABB',
    },

    {
        year: 2013,
        title: 'Applikationsentwickler',
        url: '',
        duration: '1 Year',
        details:
            'Created Database',
    },

];
const Work = () => {
  return (
    <div id='work' className=' max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item,idx) => (
            <WorkItem
            key={idx}
            year={item.year}
            title={item.title} 
            url={item.url}
            duration={item.duration} 
            details={item.details}
            />

        ))}
    </div>
  )
}

export default Work