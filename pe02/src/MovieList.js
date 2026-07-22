import { useState } from 'react';
// This is where the data of movies is located, 
// grabs the array of movies
import { movies } from './movieData';

function MovieList() {
    // used for filtering through different movie genres
    const [genre, setGenre] = useState("All Genres");
    
    // conditional statements
    const filteredMovies =
        genre === "All Genres"
            ? movies
            : movies.filter(movie => movie.genre === genre);
    
    // handles the activity when a movie div is clicked
    const handleMovieClick = (title) => {
        alert(title);
    };

    // either creates a filtered or unfiltered list 
    // depending on the filter requirements
    const listMovieItems = filteredMovies.map(movie =>
        <div key={movie.title + movie.genre + movie.releaseYear}
             className="MovieCard"
             onClick={() => handleMovieClick(movie.title)} 
        >
            <h2>{movie.title}</h2>
            <p>Genre: {movie.genre}</p>
            <p>Released: {movie.releaseYear}</p>
        </div>
    );
    
    // What the page should display
    return (
        <>
            <h1>Movie Lists:</h1>
            {/* The dropdown menu to select genre */}
            <select
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
            >
                <option>All Genres</option>
                <option>Sci-fi</option>
                <option>Action</option>
                <option>Drama</option>
            </select>
            {/* Give the list of movies */}
            <ul>{listMovieItems}</ul>
        </>
    );
}

export default MovieList;