import { useEffect } from "react"
import { connect } from "react-redux"
import MovieList from "../components/MovieList"
import * as actionCreator from '../stores/creators/actionCreators'

function BrowseMovies(props) {

    useEffect(() => {
        props.onFetchMovies()
    }, [])

    const handleDelete = () => {
        props.onFetchMovies() 
    }

        return(
            <div>
                <h1>Browse Movies</h1>
                <MovieList onDelete = {handleDelete}/>
            </div>
        )
    
}


const mapDispatchToProps = (dispatch) => {
    return{
        onFetchMovies: () => dispatch(actionCreator.fetchMovies())
    }
}

export default connect(null, mapDispatchToProps)(BrowseMovies)