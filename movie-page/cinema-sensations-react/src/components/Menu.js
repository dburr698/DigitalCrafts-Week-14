import { NavLink } from "react-router-dom";
import '../styles/Menu.css'


function Menu() {

    return (
        <div className="menu">
            <NavLink className="link" to='/'>Browse</NavLink>
            <NavLink className="link" to='/favorites'>Favorites</NavLink>
            <NavLink className="link" to='/add-movie'>Add Movie</NavLink>
            <NavLink className="link" to='/login'>Login</NavLink>
            <NavLink className="link" to='/register'> Register</NavLink>

        </div>
    )

}

export default Menu