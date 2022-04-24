import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();

  function handleLogOut() {
    sessionStorage.setItem(accessToken, null);
    sessionStorage.clear();
    history.push("/login");
  }

  return (
    <button type="button" onClick={handleLogOut}>
      Logout
    </button>
  );
};

export default Logout;
