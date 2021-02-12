import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import paths from "../../paths";

function GuestRoute({ children, ...props }) {
  const isAuthenticated = useStoreState((state) => state.auth.isAuthenticated);
  const shouldRedirect = isAuthenticated ? (
    <Redirect to={{ pathname: paths.DASHBOARD }} />
  ) : null;

  return (
    <Route {...props}>
      {shouldRedirect}
      {children}
    </Route>
  );
}

export default GuestRoute;
