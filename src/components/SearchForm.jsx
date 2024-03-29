import { MoviesContext } from "../context/MoviesContext";
import { QueryContext } from "../context/QueryContext"
import { useAtom, useSetAtom } from 'jotai';

const SearchForm = () => {
  const setMovies = useSetAtom(MoviesContext);
  const [query, setQuery] = useAtom(QueryContext);

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
      if (data.results.length === 0) {
        console.log('empty');
      } else setMovies(data.results)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form className='form flex flex-row justify-center absolute -bottom-5 -ml-1/4 left-0 right-0 z-10'>
      <input
        placeholder='Find movie/series'
        onChange={(e) => setQuery(e.target.value)}
        className='text-neutral-800 dark:text-white border border-neutral-400 dark:border-neutral-600 px-4 py-2 w-4/6 rounded-l-md dark:bg-neutral-800'
      />
      <button
        onClick={fetchData}
        className='text-black dark:text-white font-bold bg-white dark:bg-neutral-800 min-w-16
        border border-l-0 border-neutral-400 dark:border-neutral-600 rounded-l-none w-1/6 rounded-r-md'
      >
        Search
      </button>
    </form>
  )
}

export default SearchForm