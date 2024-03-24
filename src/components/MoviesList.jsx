import Movie from "./Movie";
import { WatchlistContext } from "../context/WatchlistContext";
import { MoviesContext } from "../context/MoviesContext";
import { useContext } from "react";

const MoviesList = () => {
    const { watchlist, setWatchlist } = useContext(WatchlistContext)
    const { movies } = useContext(MoviesContext);
    const moviesAndSeries = [...movies.filter(item => item.media_type !== 'person')]
    const moviesSortedByPopularity = [...moviesAndSeries.sort((a,b) => b.popularity - a.popularity)]

    const handleWatchlist = (movie) => {
        setWatchlist(prev => {
            const newArr = [...prev]
            if (newArr.includes(movie)) {
                console.log(`removed movie: "${movie.title}"`);
                newArr.splice(newArr.indexOf(movie), 1)
            } else {
                newArr.push(movie)
            }
            return newArr
        })
    }

    return(
        <div className="py-12 absolute top-52 w-full bg-white dark:bg-neutral-800">
            {moviesSortedByPopularity.length > 0 && (
                moviesSortedByPopularity.map(movie => (
                    <>
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
                    </>
                ))
            )}
        </div>
    )
}

export default MoviesList