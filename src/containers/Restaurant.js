import { connect } from 'react-redux'
import Restaurant from '../components/Restaurant'

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants
    }
}

export default connect(mapStateToProps)(Restaurant)