import React from 'react';
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AddRestaurant from '../containers/AddRestaurant';

const Navigation = ( props ) => {
    console.log(props)
    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Local Restaurant App
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/add-restaurant">Add Restaurant</Link>
                    </li>
                    { props.user.loggedIn ?
                        <li className="nav-list-item"
                                onClick={() => {
                                props.logout()
                            }}>
                            Logout
                        </li>
                    :
                        <li className="nav-list-item"
                            onClick={() => {
                                document.cookie = "loggedIn="
                                window.location.replace("/login")
                            }}>
                            Login
                        </li> 
                    }
                </ul>
            </Toolbar>
                    <Toolbar>{props.user.loggedIn ? props.user.username : 'Logged Out'}</Toolbar>
                    {props.user.loggedIn ? <AddRestaurant /> : ''}
        </AppBar>
    )
}

export default Navigation;