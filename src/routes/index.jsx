import { Route, Switch } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>

      <Route exact path="/cadastro">
        <Cadastro />
      </Route>
    </Switch>
  );
}

export default Routes;
