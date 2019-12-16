import { connect } from 'react-redux';
import Login from '../components/Login';
import { login, logout } from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        login: state.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username) => dispatch(login(username)),
        logout: (user) => dispatch(logout(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);