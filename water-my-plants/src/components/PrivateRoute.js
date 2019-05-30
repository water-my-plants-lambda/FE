import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, currentUser, ...rest }) => {
    let token = localStorage.getItem('token');
    let expiry = localStorage.getItem('tokenExp');
    let expired = true;
    if(expiry > Date.now()) {
        expired = false;
    }
    return <Route
            {...rest}
            render={props =>
            token && !expired
            ? <Component {...props} />
            : <Redirect
                to='/login'
            />}
        />;
}


export default PrivateRoute;