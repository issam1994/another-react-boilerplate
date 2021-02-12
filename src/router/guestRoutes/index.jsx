// animation wrapper
import AnimatedSwitch from "../animatedSwitch";
//pages - pages
import Login from "../../pages/login";
import Register from "../../pages/register";
//router stuff
import { Redirect } from "react-router-dom";
import GuestRoute from "./guestRoute";
import paths from "../paths";

const routes = [
  { path: paths.LOGIN, name: "login", Component: Login, isPrivate: false },
  {
    path: paths.REGISTER,
    name: "register",
    Component: Register,
    isPrivate: false,
  },
];

function GuestRoutes() {
  return (
    <AnimatedSwitch classNames="slide" possiblePaths={routes.map((r) => r.path)}>
      {routes.map(({ path, Component }) => {
        return (
          <GuestRoute key={path} exact path={path}>
            <Component />
          </GuestRoute>
        );
      })}
      {/* when /auth/something doesn't exist  */}
      <Redirect to={paths.LOGIN} />
    </AnimatedSwitch>
  );
}

export default GuestRoutes;
