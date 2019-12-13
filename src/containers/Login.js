import { connect } from 'react-redux';
import Login from '../components/Login';
import { login } from '../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        login: (car) => dispatch(login(car))
    }
}

export default connect(null, mapDispatchToProps)(Login);