import { connect } from 'react-redux'
import Navigation from '../components/Navigation'
import { login, logout } from '../redux/actions'


const mapStateToProps = ( state ) => {
    return {
    user: state.user,
    login: state.login
    }
}


const mapDispatchToProps = ( dispatch ) => {
    return {
        login: (username) => dispatch(login(username)),
        logout: ( ) => dispatch( logout( ) )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Navigation)