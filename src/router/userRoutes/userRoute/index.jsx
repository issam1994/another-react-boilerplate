import { Route, Redirect } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import paths from "../../paths";

function UserRoute({ children, ...props }) {
  const isAuthenticated = useStoreState((state) => state.auth.isAuthenticated);
  const shouldRedirect = isAuthenticated ? null : (
    <Redirect to={{ pathname: paths.LOGIN }} />
  );

  return (
    <Route {...props}>
      {shouldRedirect}
      {children}
    </Route>
  );
}

export default UserRoute;
