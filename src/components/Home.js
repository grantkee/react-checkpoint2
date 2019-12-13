import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import cars from '../cars.json'
import restaurants from '../restaurants.json'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div className="card-container">
            {restaurants.map((restaurant, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <span>{restaurant.restaurant.name.toUpperCase()}</span>
                        <ul>
                            <li>Address: {restaurant.restaurant.location["address"]}</li>
                            {/* <li>Cylinders: {restaurant["Cylinders"]}</li>
                            <li>Displacement: {restaurant["Displacement"]}</li>
                            <li>Horsepower: {restaurant["Horsepower"]}</li> */}
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/car/${restaurant.id}`}>See More Details</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )

    // return (
    //     <div className="card-container">
    //         {cars.map((car, idx) => (
    //             <Card key={idx} className="card">
    //                 <CardContent className="text-gray">
    //                     <span>{car.Name.toUpperCase()}</span>
    //                     <ul>
    //                     <li>Miles_per_Gallon: {car["Miles_per_Gallon"]}</li>
    //                     <li>Cylinders: {car["Cylinders"]}</li>
    //                     <li>Displacement: {car["Displacement"]}</li>
    //                     <li>Horsepower: {car["Horsepower"]}</li>
    //                     </ul>
    //                 </CardContent>
    //                 <Divider />
    //                 <CardActions style={{ color: 'mediumblue' }}>
    //                     <Link to={`/car/${car.id}`}>See More Details</Link>
    //                 </CardActions>
    //             </Card>
    //         ))}
    //     </div>
    // )
}

export default Home