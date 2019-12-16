import React from 'react'
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Navigation = ( props ) => {
    let login = props.user
    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Local Restaurant App
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Restaurants</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/add-restaurant">Add Restaurant</Link>
                    </li>
                    <li className="nav-list-item"
                        onClick={() => {
                            document.cookie = "loggedIn="
                            window.location.replace("/login")
                        }}>
                        Login
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation;