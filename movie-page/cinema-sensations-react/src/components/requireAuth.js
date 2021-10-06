import { Component } from "react";
import { connect } from "react-redux";



export default function(ComposedComponent) {

    class Authenticate extends Component {
        constructor(props){
            super(props)

            if(!this.props.isLoggedIn) {
                this.props.history.push('/')
            }
        }

        render() {
            return <ComposedComponent {...this.props} /> 
        }
    }

    const mapStateToProps = (state) => {
        return{
            isLoggedIn: state.isLoggedInRed.isLoggedIn
        }
    }

    return connect (mapStateToProps)(Authenticate)
}