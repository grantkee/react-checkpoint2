import { generateKeyPairSync } from "crypto"

const url = "https://developers.zomato.com/api/v2.1/geocode?lat=30.267153&lon=-97.743057";

export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    } 
}

export const fetchBusiness = () => {
    return( dispatch ) => {
        fetch(url)
        .then(res => res.json())
        .then(response => {
            const action = {
                type: 'FETCH_MAKES',
                value: response.Results
            }
            dispatch(action)
        })
        .catch(error => console.log(error))
    }
}

export const deleteMake = ( index ) => {
    return {
        type: 'REMOVE_MAKE',
        value: index
    }
}