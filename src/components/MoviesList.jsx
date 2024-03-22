import Movie from "./Movie";

const MoviesList = ( { movies }) => {

    console.log(movies)

    const moviesSortedByPopularity = [...movies.sort((a,b) => b.popularity - a.popularity)]

    return(
        <div className="py-8">
            {moviesSortedByPopularity.length > 0 && (
                moviesSortedByPopularity.map(movie => (
                    <Movie
                        key={movie.id}
                        title={movie.title}
                        description={movie.overview}
                        poster={movie.poster_path}
                        rating={movie.vote_average}
                        popularity={movie.popularity}
                    />
                ))
            )}
        </div>
    )
}

export default MoviesList