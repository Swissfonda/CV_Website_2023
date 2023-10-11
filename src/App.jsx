import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import School from './components/School'
import Resume from './components/resume/Resume'

function App() {
  const [count, setCount] = useState(0)

  return (


      <div className='bg-zinc-800 text-white'>
        <Sidenav/>
        <Main/>
        <div className='max-w-screen-2xl mx-auto px-16'>
        <Resume/>
        </div>

      </div>


  )

}

export default App
