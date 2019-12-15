import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core';
import restaurants from '../restaurants.json';

const Restaurant = (props) => {
    const id = props.match.params.id

    const restaurant = props.restaurants.find(r => r.id == id)

    return (
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
    )
}

export default Restaurant