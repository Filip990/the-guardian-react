import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "../../utils/hooks/useAuth";

import Header from "../../components/Header/Header";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const auth = useAuth();
  const token = localStorage.getItem("currentUser");

  return (
    <Route
      {...rest}
      render={() =>
        !!auth.user || token ? (
          <>
            <Header />
            <RouteComponent />
          </>
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRoute;
