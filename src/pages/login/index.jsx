import { useStoreActions } from "easy-peasy";
import { Link } from "react-router-dom";
import paths from "../../router/paths";

function Login() {
  const fakeLogin = useStoreActions((actions) => actions.auth.saveToken);

  return (
    <div className="">
      <h1>Login route</h1>
      <button onClick={() => fakeLogin("FAKE-TOKEN-001")}>fake log in</button>
      <hr />
      <Link to={paths.REGISTER}>register</Link>
    </div>
  );
}

export default Login;
