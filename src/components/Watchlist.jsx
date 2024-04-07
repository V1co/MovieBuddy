import Movie from "./Movie";
import { WatchlistContext } from "../context/WatchlistContext";
import { useAtom } from "jotai";

const Watchlist = () => {
    const [watchlist, setWatchlist] = useAtom(WatchlistContext)

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
                        <hr className="w-11/12 mx-auto h-0.5 my-8 bg-neutral-400 dark:bg-gray-700" /> : ""
                      }
                    </>
                ))
            ) : <h2 className="text-2xl text-center">Currently no movies in watchlist.</h2>}
        </div>
    )
}

export default Watchlist