import * as actionType from '../actions/actionTypes'

const initialState = {
    movieDetails: []
}

const MovieDetailsReducer = (state=initialState, action) => {
    switch(action.type){
        case actionType.MOVIE_DETAILS:
            return{
                ...state,
                movieDetails: action.payload
            }

        default:
            return state
    }
}

export default MovieDetailsReducer