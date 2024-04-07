import Movie from "./Movie";
import { WatchlistContext } from "../context/WatchlistContext";
import { QueryContext } from "../context/QueryContext";
import { MoviesContext } from "../context/MoviesContext";
import { NotFoundContext } from "../context/NotFoundContext";
import { useAtomValue, useSetAtom } from "jotai";

const MoviesList = () => {
    const setWatchlist = useSetAtom(WatchlistContext)
    const movies = useAtomValue(MoviesContext);
    const query = useAtomValue(QueryContext)
    const notFound = useAtomValue(NotFoundContext)
    const moviesAndSeries = [...movies.filter(item => item.media_type !== 'person')]
    const moviesSortedByPopularity = [...moviesAndSeries.sort((a,b) => b.popularity - a.popularity)]

    const handleWatchlist = (movie) => {
        setWatchlist(prev => {
            const newArr = [...prev]
            const existingMovie = newArr.find(item => item.id === movie.id)
            if (existingMovie) {
                newArr.splice(newArr.indexOf(existingMovie), 1)
            } else {
                newArr.push(movie)
            }
            return newArr
        })
    }

    return(
        <div className="py-12 absolute top-52 w-full bg-white dark:bg-neutral-800">
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
                            popularity={movie.popularity}
                            handleWatchlist={handleWatchlist}
                            id={movie.id}
                            movie={movie}
                            type={movie.media_type}
                            genres={movie.genre_ids}
                        />
                        {moviesSortedByPopularity.indexOf(movie) !== moviesAndSeries.length -1?
                        <hr className="w-11/12 mx-auto h-0.5 mx-auto my-8 bg-neutral-400 dark:bg-gray-700" /> : ""}
                    </div>
                ))
            : notFound? <h2 className="text-2xl text-center">{`Movie/series: "${query}" was not found.`}</h2> : ''}
        </div>
    )
}

export default MoviesList