import { useState } from 'react'
import Simon from './components/Simon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Simon></Simon>
    </>
  )
}

export default App
