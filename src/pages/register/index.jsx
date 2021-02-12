import { Link } from "react-router-dom";
import paths from "../../router/paths";
function Register() {
  return (
    <div className="">
      <h1>Register route</h1>
      <Link to={paths.LOGIN}>Go To "Log in" page</Link>
    </div>
  );
}

export default Register;