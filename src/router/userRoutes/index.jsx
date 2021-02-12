// animation wrapper
import AnimatedSwitch from "../animatedSwitch";
//pages - pages
import Dashboard from "../../pages/dashboard";
//router stuff
import { Redirect } from "react-router-dom";
import UserRoute from "./userRoute";
import paths from "../paths";

const routes = [
  { path: paths.DASHBOARD, name: "dashboard", Component: Dashboard },
];

function UserRoutes() {
  return (
    <AnimatedSwitch
      classNames="slide"
      possiblePaths={routes.map((r) => r.path)}
    >
      {routes.map(({ path, Component }) => {
        return (
          <UserRoute key={path} exact path={path}>
            <Component />
          </UserRoute>
        );
      })}
      {/* when /app/something doesn't exist  */}
      <Redirect to={paths.DASHBOARD} />
    </AnimatedSwitch>
  );
}

export default UserRoutes;
