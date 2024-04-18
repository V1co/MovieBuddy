import StreamingMovie from "./StreamingMovie";
import { WatchlistContext } from "../context/WatchlistContext";
import { useAtomValue, useAtom } from "jotai";
import { Loading } from "./Loading";
import { LoadingContext } from "../context/LoadingContext";

const Watchlist = () => {
    const [watchlist, setWatchlist] = useAtom(WatchlistContext)
    const isLoading = useAtomValue(LoadingContext)

    const handleWatchlist = (movie) => {
        setWatchlist(prev => {
            const newArr = [...prev]
            const existingMovie = newArr.find(item => item.id === movie.id)
            if (existingMovie) newArr.splice(newArr.indexOf(existingMovie), 1)
            else newArr.push(movie)

            return newArr
        })
    }

    return(
        <div className="py-12 absolute top-52 w-full bg-white dark:bg-neutral-800">
            {isLoading && <Loading />}
            {watchlist.length > 0 ? (
                watchlist.map(movie => (
                    <>
                      <StreamingMovie
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
                          streaming={movie.streaming}
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