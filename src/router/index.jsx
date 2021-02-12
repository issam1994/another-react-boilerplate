// animation wrapper
import { Redirect, Route } from "react-router-dom";
import ErrorPage from "../pages/404";
// layouts
import AppLayout from "../layouts/appLayout";
import AuthLayout from "../layouts/authLayout";
// router stuff
import GuestRoutes from "./guestRoutes";
import UserRoutes from "./userRoutes";
import paths from "./paths";
import AnimatedSwitch from "./animatedSwitch";

const routes = [
  { path: "/auth", RoutesGroup: GuestRoutes, Layout: AuthLayout },
  { path: "/app", RoutesGroup: UserRoutes, Layout: AppLayout },
];

function Routes() {
  return (
    <AnimatedSwitch
      classNames="scale"
      possiblePaths={routes.map((r) => r.path)}
    >
      {/* no route for "/", so redirect login page  */}
      <Redirect from="/" exact to={paths.LOGIN} />
      {/* main routes - two main layouts that contain nested routes  */}
      {routes.map(({ RoutesGroup, Layout, path, ...rest }) => (
        <Route key={path} path={path} {...rest}>
          <Layout>
            <RoutesGroup />
          </Layout>
        </Route>
      ))}
      {/* 404 route  */}
      <Route to="*">
        <ErrorPage />
      </Route>
    </AnimatedSwitch>
  );
}

export default Routes;
