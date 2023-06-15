import React from "react";
import {  Navigate } from "react-router-dom";

interface PrivateRouteProps {
  auth: boolean;
  component: React.ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  const { auth, component: Component, ...rest } = props;

  return (
    // <Route {...rest}>
    auth ? <Component {...rest} /> : <Navigate to={{ pathname: "/login" }} />
    // </Route>
  );
};

export default PrivateRoute;
