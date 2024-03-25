import { WatchlistContext } from "../context/WatchlistContext";
import { useContext } from "react";
import genresData from "../constants/genres.json"

const Movie = ({
    title,
    description,
    poster,
    rating,
    popularity,
    handleWatchlist,
    movie,
    type,
    name,
    genres
}) => {
    const { watchlist } = useContext(WatchlistContext)
    const placeholderPoster = "https://critics.io/img/movies/poster-placeholder.png"

    return(
        <div className="flex flex-col sm:gap-4 sm:flex-row px-4 sm:px-12 bg-white dark:bg-neutral-800">
            <img
                src={poster? `https://image.tmdb.org/t/p/w500/${poster}` : placeholderPoster}
                className="w-48 self-center mb-4 sm:mb-0 sm:w-36 sm:mr-4"
            />

            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 items-center sm:self-start sm:flex-row">
                    <span className="font-bold text-xl">
                        {type === "tv"? name : title}
                    </span>
                    <div className="flex gap-4 items-center">
                        <span>* {rating} ({popularity.toFixed(1)}k votes)</span>
                        <button
                            onClick={() => handleWatchlist(movie)}
                            className="border text-black dark:text-white border-black dark:border-white rounded px-4 py-0.5">
                            {watchlist.find(item => item.id === movie.id)? '- WATCHLIST' : '+ WATCHLIST'}
                        </button>
                    </div>
                </div>

                <div className="flex flex-row self-center sm:self-start">
                    {genres.map(genre => {
                        if (genres.indexOf(genre) === genres.length - 1) return genresData[genre]
                        else return `${genresData[genre]}, `
                    })}
                </div>
                <p className="sm:text-left text-center">{description}</p>
            </div>
        </div>
    )
}

export default Movie