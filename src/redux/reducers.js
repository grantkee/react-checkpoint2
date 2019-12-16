import { combineReducers } from 'redux'

const initialState = {
    auth: { loggedIn: false}
}

const login = (state = initialState, action) => {
    switch(action.type){
        case "LOG_IN":
            return {...state, auth: { loggedIn: true}};
        case "LOG_OUT":
            return {...state, auth: { loggedIn: false }};
        default:
            return state;
    }
}

const restaurants = (state = [], action) => {
    switch(action.type) {
        case 'ADD_RESTAURANT':
            return [ ...state, action.value ]
        case 'REMOVE_RESTAURANT':
            const restaurants = [ ...state ]
            restaurants.splice(action.value, 1)
            return restaurants
        default:
            return state
    }
}

// const makes = (state = [], action) => {
//     switch(action.type) {
//         case 'FETCH_MAKES':
//             return action.value
//         case 'REMOVE_MAKE':
//             const makes = [...state]
//             makes.splice(action.value, 1)
//             return makes
//         default:
//             return state
//     }
// }

export default combineReducers({ initialState, login, restaurants })