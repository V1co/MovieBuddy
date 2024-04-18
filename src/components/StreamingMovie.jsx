import { WatchlistContext } from "../context/WatchlistContext";
import genresData from "../constants/genres.json"
import { useAtomValue } from "jotai"
import { ReadMore } from "./ReadMore";
import { MdOutlineStar, MdAddCircle, MdRemoveCircle } from "react-icons/md";
import streamingIcons from '../helpers/streamingIcons'

const StreamingMovie = ({
  title,
  description,
  poster,
  rating,
  votes,
  handleWatchlist,
  movie,
  type,
  name,
  genres,
  streaming
}) => {
  const watchlist = useAtomValue(WatchlistContext)
  const placeholderPoster = "https://critics.io/img/movies/poster-placeholder.png"
  console.log(streaming)

  return (
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
                <span className="ml-1">({votes} votes)</span>
              </div>
            </div>
            <button
              onClick={() => handleWatchlist(movie)}
              className="text-black dark:text-white">
              {watchlist.find(item => item.id === movie.id)?
                <div className="flex flex-row gap-1 justify-center sm:justify-normal border border-black dark:border-white px-3 rounded">
                  <MdRemoveCircle className="self-center text-red-700 dark:text-red-500" />
                  <span>Remove</span>
                </div>
              : <div className="flex flex-row gap-1 justify-center sm:justify-normal border border-black dark:border-white px-3 rounded">
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
          <div className="flex flex-row gap-2 self-center text-center sm:self-start mt-2 items-center">
          {streaming?.length && streaming.map(item => {
            return (
              <div key={item.availableSince}>
                <a href={item.link} target='_blank' rel='noreferrer' className="flex flex-col">
                  {streamingIcons[item.service]}
                  <span className="border rounded-b border-t-0">{item.streamingType === "subscription"? "sub" : item.streamingType}</span>
                </a>
              </div>
              )
            })}
          </div>
      </div>
    </div>
  )
}

export default StreamingMovie