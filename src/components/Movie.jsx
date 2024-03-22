const Movie = ( { title, description, poster, rating, popularity } ) => {

    return(
        <div className="flex mb-8 flex-col sm:gap-4 sm:flex-row">
            <img 
                src={`https://image.tmdb.org/t/p/w500/${poster}`} 
                className="w-48 h-64 mb-4 self-center sm:w-36 sm:h-48 sm:mr-4"
            />
            
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2 self-center sm:self-start sm:flex-row">
                    <span className="font-bold text-xl">{title}</span>
                    <div>
                        <span>* {rating} ({popularity} votes)</span>
                        <span className="font-bold text-slate-400"> + WATCHLIST</span>
                    </div>
                </div>

                <div className="flex flex-row self-center sm:self-start">
                    <span>Genres here</span>
                </div>
                <p className="text-left mb-8">{description}</p>
            </div>
            <hr />
        </div>
    )
}

export default Movie