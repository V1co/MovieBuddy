import Watchlist from "../components/Watchlist";
import { Link } from "react-router-dom";

export default function WatchlistPage() {

  return (
    <div>
      <header className="w-full h-52 absolute top-0 left-0 border-b border-neutral-600 content-center
          bg-header bg-cover bg-left-bottom bg-blend-multiply bg-neutral-500 dark:bg-neutral-600">
        <div className="h-full flex flex-row justify-between items-center w-5/6 ml-auto mr-auto">
          <h2 className="text-4xl font-bold text-white self-center m-l-24">Watchlist</h2>
          <Link to="/" className='text-xl text-white font-bold'>Find movies</Link>
        </div>
      </header>
      <Watchlist />
    </div>
  )
}