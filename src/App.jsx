import './App.css'
import Watchlist from './components/Watchlist'
import Home from './components/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import { MoviesContext } from './context/MoviesContext'

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <BrowserRouter>
      <MoviesContext.Provider value= {{ movies, setMovies }}>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/watchlist">Watchlist</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </MoviesContext.Provider>
    </BrowserRouter>
  )
}

export default App
