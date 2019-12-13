import { connect } from 'react-redux'
import AddRestaurant from '../components/AddRestaurant'
import { addRestaurant } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
    return {
        addRestaurant: (restaurant) => dispatch(addRestaurant(restaurant))
    }
}

export default connect(null, mapDispatchToProps)(AddRestaurant)