import { useState } from 'react'
import './App.css'

function App() {
  const [query, setQuery] = useState('')

  const handleSubmit = () => {
   console.log(query)
  }

  console.log(query);

  return (
    <>
      <div className='form'>
        <input placeholder='Type a product' onChange={(e) => setQuery(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}

export default App
