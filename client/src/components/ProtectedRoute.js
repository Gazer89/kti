import React from "react";
import {Route, Redirect} from "react-router-dom";
import {PropTypes} from "prop-types";

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route { ...rest } render={(props) => {
        const user = sessionStorage.getItem('username');
        if (user) {
            return <Component { ...props } />;
        } else {
            return <Redirect to={ rest.redirectUrl } />
        }
    }} />
);

ProtectedRoute.propTypes = {
    redirectUrl: PropTypes.string.isRequired
}

export default ProtectedRoute;