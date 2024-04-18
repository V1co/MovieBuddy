import { MoviesContext } from "../context/MoviesContext";
import { QueryContext } from "../context/QueryContext"
import { NotFoundContext } from "../context/NotFoundContext"
import { useSetAtom } from 'jotai';
import { useRef } from "react";
import { LoadingContext } from "../context/LoadingContext";

const SearchForm = () => {
  const setMovies = useSetAtom(MoviesContext);
  const setQuery = useSetAtom(QueryContext);
  const setNotFound = useSetAtom(NotFoundContext);
  const inputRef = useRef(null)
  const setIsLoading = useSetAtom(LoadingContext)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWNiNWI3YzllMWU0YzBkM2EwZmRhYTc3MWNjYWEzMyIsInN1YiI6IjVmOWUwZTZlMzQ0YThlMDAzNDliYzM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lKXVbIqGgR_siGDf6hu5n08L-k5gsrGqrVsG49SX5jA'
    }
  };

  const fetchData = async (e) => {
    e.preventDefault()
    setQuery(inputRef.current.value)

    try {
      setIsLoading(true)
      const res = await fetch(`https://api.themoviedb.org/3/search/multi?query=${inputRef.current.value}&include_adult=false&language=en-US&page=1`, options)
      const data = await res.json();
      if (data.results.length === 0) {
        setNotFound(true)
      } else {
        setMovies(data.results)
        console.log(data.results);
        setNotFound(false)
      }
    } catch (err) {
      console.log(err);
      return
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={fetchData} className='form flex flex-row justify-center absolute -bottom-5 -ml-1/4 left-0 right-0 z-10'>
      <input
        placeholder='Find movie/series'
        ref={inputRef}
        className='text-neutral-800 dark:text-white border border-neutral-400 dark:border-neutral-600 px-4 py-2 w-4/6 rounded-l-md dark:bg-neutral-800'
        required={true}
        minLength={3}
      />
      <input
        type="submit"
        value="Search"
        className='text-black dark:text-white font-bold bg-white dark:bg-neutral-800 min-w-24 border border-l-0 border-neutral-400 dark:border-neutral-600 rounded-l-none w-1/6 rounded-r-md'
      ></input>
    </form>
  )
}

export default SearchForm