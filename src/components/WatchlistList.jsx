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
        console.log(watchlist)
    }

    return(
        <div className="py-12 absolute top-52 w-full bg-white dark:bg-neutral-800">
            {watchlist.length > 0 ? (
                watchlist.map(movie => (
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
                    {watchlist.indexOf(movie) !== watchlist.length -1?
                        <hr className="w-6/8 mx-12 h-0.5 mx-auto my-8 bg-neutral-400 dark:bg-gray-700" /> : ""}
                    </>
                ))
            ) : <h2 className="text-2xl text-center">Currently no movies in watchlist</h2>}
        </div>
    )
}

export default WatchlistList