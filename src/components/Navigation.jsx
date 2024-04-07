import { useState } from "react";
import { MdMenu, MdClose, MdSearch, MdTv } from "react-icons/md";
import { Link } from "react-router-dom"

export const Navigation = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="size-8">
      <dialog open={open} className="fixed left-0 top-0 m-0 h-full min-w-48 sm:w-96 w-3/4 bg-white dark:bg-neutral-800 z-20 animate-slide border-none rounded-r-xl shadow-lg shadow-black">
        <div className="fixed sm:left-96 left-3/4 top-0 w-full h-full" onClick={() => setOpen(false)}></div>
        <button onClick={() => setOpen(false)} className="absolute right-3 top-3 border p-1.5 border-black dark:border-white rounded dark:hover:bg-neutral-700 hover:bg-neutral-200">
          <MdClose className="size-6 text-black dark:text-white"/>
        </button>
        <div className="relative flex flex-col mt-16">
          <Link to="/" onClick={() => setOpen(false)} className='pl-4 py-2 text-lg text-black dark:text-white flex items-center gap-2 dark:hover:bg-neutral-700 hover:bg-neutral-200'>
            <MdSearch className="size-5" /> Search
          </Link>
          <Link to="/watchlist" onClick={() => setOpen(false)} className='pl-4 py-2 text-lg text-black dark:text-white flex items-center gap-2 dark:hover:bg-neutral-700 hover:bg-neutral-200'>
            <MdTv className="size-5" /> Watchlist
          </Link>
        </div>
      </dialog>
      <button onClick={() => setOpen(prev => !prev)} className="border border-white rounded">
        <MdMenu className="size-8 px-1 text-white hover:bg-neutral-500" />
      </button>
    </div>
  )
}