import Movie from "./Movie";
import { WatchlistContext } from "../context/WatchlistContext";
import { MoviesContext } from "../context/MoviesContext";
import { useContext } from "react";

const MoviesList = () => {
    const { watchlist, setWatchlist } = useContext(WatchlistContext)
    const { movies } = useContext(MoviesContext);

    // console.log(movies)

    const moviesSortedByPopularity = [...movies.sort((a,b) => b.popularity - a.popularity)]

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

        // console.log(watchlist)
    }

    return(
        <div className="py-8">
            {moviesSortedByPopularity.length > 0 && (
                moviesSortedByPopularity.map(movie => (
                    <Movie
                        key={movie.id}
                        title={movie.title}
                        description={movie.overview}
                        poster={movie.poster_path}
                        rating={movie.vote_average}
                        popularity={movie.popularity}
                        handleWatchlist={handleWatchlist}
                        id={movie.id}
                        movie={movie}
                    />
                ))
            )}
        </div>
    )
}

export default MoviesList