import { generateKeyPairSync } from "crypto"

const url = "https://developers.zomato.com/api/v2.1/geocode?lat=30.267153&lon=-97.743057";

export const login = () => {
    return {
        type: 'LOG_IN',
        value: true
    }
}

export const logout = () => {
    return {
        type: 'LOG_OUT',
        value: false
    }
}

export const addRestaurant = (restaurant) => {
    return {
        type: 'ADD_RESTAURANT',
        value: restaurant
    }
}

export const removeRestaurant = (id) => {
    return {
        type: 'REMOVE_RESTAURANT',
        value: id
    } 
}

// export const fetchBusiness = () => {
//     return( dispatch ) => {
//         fetch(url)
//         .then(res => res.json())
//         .then(response => {
//             const action = {
//                 type: 'FETCH_MAKES',
//                 value: response.Results
//             }
//             dispatch(action)
//         })
//         .catch(error => console.log(error))
//     }
// }

// export const deleteMake = ( index ) => {
//     return {
//         type: 'REMOVE_MAKE',
//         value: index
//     }
// }