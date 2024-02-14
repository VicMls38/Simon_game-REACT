import { useState } from 'react'
import '../css/simon.css'

function Simon() {
  const [count, setCount] = useState(0)
  let sequence = []

  return (
    <div className='simon'>
        <div className='rouge'>

        </div>
        <div className='bleu'>

        </div>
        <div className='vert'>

        </div>
        <div className='jaune'>

        </div>
    </div>
  )
}

export default Simon
