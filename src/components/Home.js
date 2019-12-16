import React from 'react';
import { Card, CardContent, CardActions, Divider } from '@material-ui/core';
// import restaurants from '../restaurants.json';
import { Link } from 'react-router-dom';

const Home = ( props ) => {
    return (
        <div className="card-container">
            {props.restaurants.map((r, idx) => (
                <Card key={r.id} className="card">
                    <CardContent className="text-gray">
                        <span>{r.name}</span>
                        <ul>
                            <li>Address: {r.location["address"]}</li>
                            <li>Rating: {r.user_rating["aggregate_rating"]}</li>
                            <li>Cost for 2: ${r["average_cost_for_two"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/restaurant/${r.id}`}>See More Details</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Home