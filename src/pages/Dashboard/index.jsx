import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../api/api";

function Dashboard({ authenticated, setAuthenticated }) {
  useEffect(() => {
    if (authenticated) {
      const id = localStorage.getItem("ID@KENZIE_HUB");
      const idParse = JSON.parse(id);
      api
        .get(`users/${idParse}`)
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
    } else {
      return history.push("/");
    }
  }, []);

  const history = useHistory();

  const logoff = () => {
    localStorage.clear();
    setAuthenticated(false);
    history.push("/");
  };

  return (
    <>
      <h1>aqui vai ser a dash</h1>
      <button onClick={() => logoff()}>logoff</button>
    </>
  );
}

export default Dashboard;
