import { Switch, Route } from "react-router";
import GlobalStyles from "../Styles/GlobalStyles";

import Home from "../Pages/Home";
import Register from "../Pages/Register";
import LandingPage from "../Pages/LandingPage";

const RoutesPatchs = () => {
  return (
    <Switch>
      <Route exact path="/">
        <GlobalStyles />
        <Home />
      </Route>
      <Route path="/landingpage">
        <GlobalStyles />
        <LandingPage />
      </Route>
      <Route path="/login">
        <GlobalStyles />
        <Register />
      </Route>
      <Route path="/register">
        <GlobalStyles />
        <Register />
      </Route>
      <Route path="/home">
        <GlobalStyles />
        <Register />
      </Route>
      <Route path="/catalogue">
        <GlobalStyles />
        <Register />
      </Route>
      <Route path="/aboutus">
        <GlobalStyles />
        <Register />
      </Route>
      <Route path="/regionmap">
        <GlobalStyles />
        <Register />
      </Route>
    </Switch>
  );
};

export default RoutesPatchs;
