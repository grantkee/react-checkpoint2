import React, {useState} from 'react'
import { Container, Paper, Chip } from '@material-ui/core';
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@material-ui/icons/LocationOn";



const Restaurant = (props) => {
    
    const id = props.match.params.id

    const restaurant = props.restaurants.find(r => r.id == id)
    console.log(restaurant.location)

    const [center, setCenter] = useState({ lat: 30.2672, lng: 97.7431});

    const [zoom, setZoom] = useState(11);

    return (
        <>
        <Container maxWidth="sm" className="restaurant-container">
            <Paper className="restaurant-paper">
                <h2>{restaurant.name}</h2>
                {
                    Object.keys(restaurant).map((key, idx) => {
                        return <Chip key={idx} label={`${key}: ${restaurant[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
        <Container style={{ height: "400px", width: "450px" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
                center={center}
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals
            >
                <LocationOnIcon lat={restaurant.location.latitude} lng={restaurant.location.longitude} />
            </GoogleMapReact>
        </Container>
        </>
    )
}

export default Restaurant;