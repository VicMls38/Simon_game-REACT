
import { useEffect, useState } from 'react'
import Simon from './components/Simon'
import './css/App.css'

function App() {
  const [date, setDate] = useState('')

  useEffect(() => {
    async function getDate() {   
    const response = await fetch('http://localhost:3000/')
    const date = await response.text()
    setDate(date)
   }
   getDate()
  }, [])

  return (
    <>
    <h2>Client date : {Date.now()}</h2>
    <h2>Server date : {date}</h2>
     <Simon></Simon>
    </>
  )
}

export default App
