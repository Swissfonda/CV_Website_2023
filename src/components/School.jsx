import React from 'react'
import SchoolItem from './SchoolItem';
const data = [
    {   
        startToEnd: '2017-2019',
        title: '3D Animator - SAE Zürich',
        url: 'https://www.sae.edu/che/',
        duration: 'Current',
        details:
            'Learning the way on how to become an 3D Animator',
        
    },

    {  
        startToEnd: '2009-2012',
        title: 'Applikationsentwickler - Benedict',
        url: 'https://www.benedict.ch/',
        duration: 'Current',
        details:
            'Created animations and animation Pipelines for the game called Return to Nangrim. I animated from Humanoids to 4 leg creatures. Prototyped and tested different Motion Capture suit for our Animation Pipeline.',
        
    },

    {
        startToEnd: '2009-2012',
        title: 'Privateschule A bis Z',
        url: 'https://www.privatschule-abisz.ch/',
        duration: '6 Months',
        details:
            'Maintained the website called waedi.ch with the latest events & news',
    },


    {
        startToEnd: '2009-2012',
        title: 'Privateschule A bis Z ',
        url: 'https://www.privatschule-abisz.ch/',
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

const School = () => {
  return (
    <div id='school' className=' max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
    <h1 className='text-4xl font-bold text-center text-[#001b5e]'>School</h1>

</div>
  )
}

export default School