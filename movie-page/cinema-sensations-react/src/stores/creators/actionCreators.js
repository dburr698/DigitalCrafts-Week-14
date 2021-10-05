
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

    const token = localStorage.getItem('jsonwebtoken')

    return async (dispatch) => {
        let response = await fetch("http://localhost:8080/api/movies", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
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

export const isLoggedIn = () => {
    return{
        type: actionType.IS_LOGGED_IN,
        payload: true
    }
}

export const isLoggedOut = () => {
    return {
        type: actionType.IS_LOGGED_OUT,
        payload: false
    }
}