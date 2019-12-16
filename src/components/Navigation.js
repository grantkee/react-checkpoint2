import React from 'react'
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

let login = false;

const Navigation = ( props ) => {
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
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-list-item"
                        onClick={() => {
                            document.cookie = "loggedIn="
                            window.location.replace("/login")
                        }}>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation;