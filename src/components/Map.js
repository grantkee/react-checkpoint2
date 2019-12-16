import React from "react";
import GoogleMapReact from "google-map-react";
import { Container } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const GoogleMap = ( props ) => {

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
    <Container style={{ height: "400px", width: "450px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <AnyReactComponent lat={props.lat} lng={props.lng} />
      </GoogleMapReact>
    </Container>
  );
};

export default GoogleMap;