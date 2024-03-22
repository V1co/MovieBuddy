import MoviesList from "./MoviesList"
import SearchForm from "./SearchForm"
import { MoviesContext } from "../context/MoviesContext";
import { useContext } from "react";

export default function Home() {
  const { movies } = useContext(MoviesContext);
  
  return (
    <>
      <SearchForm />
      <MoviesList movies={movies} />
    </>
  )
}