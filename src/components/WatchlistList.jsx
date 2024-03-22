import Movie from "./Movie";
import { WatchlistContext } from "../context/WatchlistContext";
import { useContext } from "react";

const WatchlistList = () => {
    const { watchlist, setWatchlist } = useContext(WatchlistContext)

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
        <div className="">
            {watchlist.length > 0 ? (
                watchlist.map(movie => (
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
            ) : <h3>Currently no movies in Watchlist</h3>}
        </div>
    )
}

export default WatchlistList