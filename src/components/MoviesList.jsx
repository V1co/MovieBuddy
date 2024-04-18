import Movie from "./Movie";
import { WatchlistContext } from "../context/WatchlistContext";
import { QueryContext } from "../context/QueryContext";
import { MoviesContext } from "../context/MoviesContext";
import { NotFoundContext } from "../context/NotFoundContext";
import { useAtomValue, useSetAtom, useAtom } from "jotai";
import { Loading } from "./Loading";
import { LoadingContext } from "../context/LoadingContext";

const MoviesList = () => {
  const setWatchlist = useSetAtom(WatchlistContext)
  const movies = useAtomValue(MoviesContext);
  const query = useAtomValue(QueryContext)
  const notFound = useAtomValue(NotFoundContext)
  const [isLoading, setIsLoading] = useAtom(LoadingContext)
  const moviesAndSeries = [...movies.filter(item => item.media_type !== 'person')]
  const moviesSortedByPopularity = [...moviesAndSeries.sort((a,b) => b.vote_count - a.vote_count)]
  // console.log(moviesSortedByPopularity);

  const handleWatchlist = async (movie) => {
    setWatchlist(async prev => {
      const newArr = [...prev]
      const existingMovie = newArr.find(item => item.id === movie.id)
      if (existingMovie) newArr.splice(newArr.indexOf(existingMovie), 1)
      else {
        const movieWithStreaming = {...movie, streaming: await fetchStreamingData(movie)}
        newArr.push(movieWithStreaming)
      }
        return newArr
      })
    }

    const fetchStreamingData = async (movie) => {
      const url = `https://streaming-availability.p.rapidapi.com/get?output_language=en&tmdb_id=${movie.name? 'tv%2F' : 'movie%2F'}${movie.id}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ea7cd4603bmshcbd20a893856d69p17b576jsndd6e94facb91',
          'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
      };

      try {
        setIsLoading(true)
        const res = await fetch(url, options)
        const data = await res.json();
        // console.log(data)
        console.log(data.result.streamingInfo.gb);
        return data.result.streamingInfo.gb
      } catch (err) {
        console.log(err);
        return err
      } finally {
        setIsLoading(false)
      }
    }

    return (
      <div className="py-12 absolute top-52 w-full bg-white dark:bg-neutral-800">
        {isLoading && <Loading />}
        {moviesSortedByPopularity.length > 0 && !notFound?
          moviesSortedByPopularity.map(movie => (
            <div key={movie.id}>
              <Movie
                key={movie.id}
                title={movie.title}
                name={movie.name}
                description={movie.overview}
                poster={movie.poster_path}
                rating={movie.vote_average}
                votes={movie.vote_count}
                handleWatchlist={handleWatchlist}
                id={movie.id}
                movie={movie}
                type={movie.media_type}
                genres={movie.genre_ids}
              />
              {moviesSortedByPopularity.indexOf(movie) !== moviesAndSeries.length -1?
              <hr className="w-11/12 h-0.5 mx-auto my-8 bg-neutral-400 dark:bg-gray-700" /> : ""}
            </div>
          ))
        : notFound? <h2 className="text-2xl text-center">{`Movie/series: "${query}" was not found.`}</h2> : ''}
    </div>
  )
}

export default MoviesList