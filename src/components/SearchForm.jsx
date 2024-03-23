import { useState, useContext } from 'react'
import { MoviesContext } from "../context/MoviesContext";

const SearchForm = () => {
  const [query, setQuery] = useState('')
  const { setMovies } = useContext(MoviesContext);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWNiNWI3YzllMWU0YzBkM2EwZmRhYTc3MWNjYWEzMyIsInN1YiI6IjVmOWUwZTZlMzQ0YThlMDAzNDliYzM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lKXVbIqGgR_siGDf6hu5n08L-k5gsrGqrVsG49SX5jA'
    }
  };

  const fetchData = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`, options)
      const data = await res.json();
      setMovies(data.results)
      // console.log(movies)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form className='form flex flex-row gap-4 justify-center'>
      <input
        placeholder='Find movie/series'
        onChange={(e) => setQuery(e.target.value)}
        className='border border-slate-600 px-2'
      />
      <button onClick={fetchData}>Submit</button>
    </form>
  )
}

export default SearchForm