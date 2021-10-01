import { BrowserRouter, Switch, Route  } from "react-router-dom";
import Home from "./Home";
import Store from "./Store";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = '/' component = {Home}/>
        <Route exact path = '/store' component = {Store}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
