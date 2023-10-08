import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import School from './components/School'

function App() {
  const [count, setCount] = useState(0)

  return (


      <div>
        <Sidenav/>
        <Main/>
        <Work/>
        <School/>
      </div>


  )

}

export default App
