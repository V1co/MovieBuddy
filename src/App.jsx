import './App.css'
import Watchlist from './components/Watchlist'
import Home from './components/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { MoviesContext } from "./context/MoviesContext";
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <BrowserRouter>
      <MoviesContext.Provider value= {{ movies, setMovies }}>
        <header>
          <nav className='flex flex-row justify-center gap-4 mb-4'>
            <Link to="/" className='text-lg'>Home</Link>
            <Link to="/watchlist" className='text-lg'>Watchlist</Link>
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