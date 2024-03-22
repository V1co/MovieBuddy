import { useState } from 'react'

export default function SearchForm() {
  const [query, setQuery] = useState('')

  const handleSubmit = () => {
   console.log(query)
  }

  console.log(query);
  return (
    <div className='form'>
      <input placeholder='Type a product' onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}