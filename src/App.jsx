import './App.css'
import WatchlistPage from './pages/WatchlistPage'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
            <Route path="/watchlist" element={<WatchlistPage />} />
          </Routes>
        </WatchlistContext.Provider>
      </MoviesContext.Provider>
    </BrowserRouter>
  )
}

export default App