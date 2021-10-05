
import * as actionType from '../actions/actionTypes'

export const addToFavorites = (movie) => {
    return {
        type: actionType.ADD_FAVORITE,
        payload: movie
    }
}

export const removeFromFavorite = (movie) => {
    return {
        type: actionType.REMOVE_FAVORITE,
        payload: movie
    }
}

export const fetchMovies = () => {

    return async (dispatch) => {
        let response = await fetch("http://localhost:8080/api/movies")
        let movies = await response.json()
        dispatch({
            type: actionType.FETCH_MOVIES,
            payload: movies
        })

    }

}

export const saveMovieDetails = (movie) => {
    return{
        type: actionType.MOVIE_DETAILS,
        payload: movie
    }
}