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

    return(
        <div className="flex mb-8 flex-col sm:gap-4 sm:flex-row">
            <img
                src={`https://image.tmdb.org/t/p/w500/${poster}`}
                className="w-48 h-64 mb-4 self-center sm:w-36 sm:h-48 sm:mr-4"
            />

            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2 self-center sm:self-start sm:flex-row">
                    <span className="font-bold text-xl self-center">
                        {type === "tv"? name : title}
                    </span>
                    <div>
                        <span>* {rating} ({popularity} votes)</span>
                        <span className="font-bold text-slate-400">
                        <button onClick={() => handleWatchlist(movie)}>
                            {watchlist.includes(movie)? '- WATCHLIST' : '+ WATCHLIST'}
                        </button></span>
                    </div>
                </div>

                <div className="flex flex-row self-center sm:self-start">
                    {genres.map(genre => {
                        if (genres.indexOf(genre) === genres.length - 1) return genresData[genre]
                        else return `${genresData[genre]}, `
                    })}
                </div>
                <p className="text-left mb-8">{description}</p>
            </div>
            <hr />
        </div>
    )
}

export default Movie