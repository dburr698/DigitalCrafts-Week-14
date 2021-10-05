import { connect } from "react-redux"
import "../styles/MovieList.css"
import * as actionCreator from '../stores/creators/actionCreators'

function FavoritesPage(props) {

    const favoriteItems = props.favorites.map((movie, index) => {
        return <li className="movieLI" key={movie.id}>
            <img className="poster" src={movie.poster} alt="Poster" />
            <h3>{movie.title} - {movie.year}</h3>
            <p>{movie.director}</p>
            <button onClick={() => props.onRemoveFavorite(index)}>Unfavorite</button>
        </li>
    })

    return (
        <div>
            <h1>Favorites</h1>
            <ul className="movieUL">
                {favoriteItems}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favRed.favorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onRemoveFavorite: (movie) => dispatch(actionCreator.removeFromFavorite(movie))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage)