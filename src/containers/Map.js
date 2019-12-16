import { connect } from 'react-redux'
import GMaps from '../components/Map'

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants
    }
}

export default connect(mapStateToProps)(GMaps)