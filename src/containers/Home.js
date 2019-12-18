import { connect } from 'react-redux';
import Home from '../components/Home'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        restaurants: state.restaurants
    }
}

export default connect(mapStateToProps)(Home)