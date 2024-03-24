import './App.css'
import Watchlist from './pages/Watchlist'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { MoviesContext } from "./context/MoviesContext";
import { WatchlistContext } from "./context/WatchlistContext";
import { useState, useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState(() => JSON.parse(localStorage.getItem('watchlist')) || [])

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist))
  }, [watchlist])

  return (
    <BrowserRouter>
      <MoviesContext.Provider value= {{ movies, setMovies }}>
        <WatchlistContext.Provider value= {{ watchlist, setWatchlist }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </WatchlistContext.Provider>
      </MoviesContext.Provider>
    </BrowserRouter>
  )
}

export default App