import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "../../utils/hooks/useAuth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const auth = useAuth();
  const token = localStorage.getItem("currentUser");

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!auth.user || token ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRoute;
