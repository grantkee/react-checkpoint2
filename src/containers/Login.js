import { connect } from 'react-redux';
import Login from '../components/Login';
import { login } from '../redux/actions';
import { logout } from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(login(user)),
        logout: (user) => dispatch(logout(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);