import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import '../styles/Menu.css'
import * as actionCreator from '../stores/creators/actionCreators'

function Menu(props) {

    const handleLogOutButton = () => {
        localStorage.removeItem('jsonwebtoken')
        props.onLogOut()
    }

    return (
        <div className="menu">
            {props.isLoggedIn ? <NavLink className="link" to='/browse-movies'>Browse</NavLink> : null }
            {props.isLoggedIn ? <NavLink className="link" to='/favorites'>Favorites</NavLink> : null }
            {props.isLoggedIn ? <NavLink className="link" to='/add-movie'>Add Movie</NavLink> : null }
            {props.isLoggedIn ? null : <NavLink className="link" to='/'>Login</NavLink>}
            {props.isLoggedIn ? null : <NavLink className="link" to='/register'> Register</NavLink>}
            {props.isLoggedIn ? <NavLink className='link' to='/'><button onClick={handleLogOutButton}>Log Out</button></NavLink>  : null}

        </div>
    )

}

const mapStateToProps = (state) => {
    return{
        isLoggedIn: state.isLoggedInRed.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onLogOut: () => dispatch(actionCreator.isLoggedOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)