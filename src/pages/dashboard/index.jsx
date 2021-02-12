import { useStoreActions } from "easy-peasy";

function Dashboard() {
  const logOut = useStoreActions((actions) => actions.auth.destroyToken);
  return (
    <div className="">
      <h1>Dashboard</h1>
      <button onClick={() => logOut()}>Log out</button>
    </div>
  );
}

export default Dashboard;