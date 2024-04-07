import { Header } from "../components/Header"
import MoviesList from "../components/MoviesList"
import SearchForm from "../components/SearchForm"

export default function Home() {
  return (
    <div>
      <Header title="Find movies">
        <SearchForm />
      </Header>
      <MoviesList />
    </div>
  )
}