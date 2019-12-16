import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core';
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@material-ui/icons/LocationOn";


const Restaurant = (props) => {
    
    const id = props.match.params.id

    const restaurant = props.restaurants.find(r => r.id == id)

    const AnyReactComponent = ({ text }) => (
        <div>
          <LocationOnIcon className="text-red" />
        </div>
      );
    
      const defaultProps = {
        center: {
          lat: restaurant.location.latitude,
          lng: restaurant.location.longitude
        },
        zoom: 11
      };

    return (
        <>
        <Container maxWidth="sm" className="restaurant-container">
            <Paper className="restaurant-paper">
                <h2>{restaurant.name}</h2>
                {
                    Object.keys(restaurant).map((key, idx) => {
                        return <Chip label={`${key}: ${restaurant[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
        <Container style={{ height: "400px", width: "450px" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
                center={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
            >
                <AnyReactComponent lat={restaurant.location.latitude} lng={restaurant.location.longitude} />
            </GoogleMapReact>
        </Container>
        </>
    )
}

export default Restaurant;