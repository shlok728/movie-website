import "../css/Favorites.css"
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/Moviecard";


function Favorites() {
    const { favorites } = useMovieContext();
    if (favorites) {
        return(
        <div className="favorites">
        <h2>Your Favorite Movies</h2>
        <div className="movie-grid">
           {favorites.map((Movie) => (
                < MovieCard movie={Movie} key={Movie.id}/>
            ))}
        </div>
        </div>
        )

    }
    return <div className="favorites-empty">
        <h2>No Favorite Movies yet</h2>
        <p>Start adding movies to your favorites and they will appear here.</p>
    </div>
    ;
}

export default Favorites;