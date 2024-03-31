import { WatchlistContext } from "../context/WatchlistContext";
import genresData from "../constants/genres.json"
import { useAtomValue } from "jotai"
import { ReadMore } from "./ReadMore";
import { MdOutlineStar, MdAddCircle, MdRemoveCircle } from "react-icons/md";

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
    const watchlist = useAtomValue(WatchlistContext)
    const placeholderPoster = "https://critics.io/img/movies/poster-placeholder.png"

    return(
        <div className="flex flex-col sm:gap-4 sm:flex-row px-4 sm:px-12 bg-white dark:bg-neutral-800">
            <img
                src={poster? `https://image.tmdb.org/t/p/w500/${poster}` : placeholderPoster}
                className="w-48 self-center mb-4 sm:mb-0 sm:w-36 sm:mr-4"
            />

            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2 items-center sm:self-start sm:flex-row">
                    <span className="font-bold text-xl">
                        {type === "tv"? name : title}
                    </span>
                    <div className="flex gap-2 items-center">
                        <div className="flex flex-row">
                            <MdOutlineStar className="mr-1 self-center text-yellow-400"/>
                            <span>{rating.toFixed(1)}/10</span>
                            <span className="ml-1">({popularity.toFixed(1)}k votes)</span>
                        </div>
                    </div>
                    <button
                        onClick={() => handleWatchlist(movie)}
                        className="text-black dark:text-white">
                        {watchlist.find(item => item.id === movie.id)?
                            <div className="flex flex-row gap-1 justify-center sm:justify-normal">
                                <MdRemoveCircle className="self-center text-black dark:text-white" />
                                <span>Remove</span>
                            </div>
                            : <div className="flex flex-row gap-1 justify-center sm:justify-normal">
                                <MdAddCircle className="self-center text-black dark:text-white" />
                                <span>Watchlist</span>
                            </div>}
                    </button>
                </div>

                <div className="flex flex-row self-center text-center sm:self-start">
                    {genres.map(genre => {
                        if (genres.indexOf(genre) === genres.length - 1) return genresData[genre]
                        else return `${genresData[genre]}, `
                    })}
                </div>
                <ReadMore id={movie.id} text={description} />
            </div>
        </div>
    )
}

export default Movie