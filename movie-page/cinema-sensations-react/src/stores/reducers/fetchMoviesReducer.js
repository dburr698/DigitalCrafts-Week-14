import * as actionType from '../../stores/actions/actionTypes'


const initialState = {
    movies: []
}

const FetchMoviesReducer = (state=initialState, action) => {
    switch(action.type){
        case actionType.FETCH_MOVIES:
            return{
                ...state,
                movies: action.payload
            }
        default:
            return state
    }
}

export default FetchMoviesReducer