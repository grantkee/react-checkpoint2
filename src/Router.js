import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import cookie from 'cookie';
import Home from './components/Home';
import Login from './components/Login';
import Restaurant from './components/Restaurant';

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false;
}

const ProtectedRoute = ({component: Component,...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => checkAuth()
        ? <Component {...props} />
        : <Redirect to="/login" />}
        />
    )
}



const Router = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <Route path="/restaurant/:id" component={Restaurant} />
        </Switch>
    );
};

export default Router;