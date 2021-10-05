import { useEffect } from "react"
import { connect } from "react-redux"


function MovieDetailsPage(props) {

    useEffect(() => {
        console.log(props.movieDetails)
    }, [])

    return(
        <div>
            <h1>Details</h1>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        movieDetails: state.detailsRed.movieDetails
    }
}

export default connect(mapStateToProps)(MovieDetailsPage)