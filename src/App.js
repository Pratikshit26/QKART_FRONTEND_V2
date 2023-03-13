import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import Login from "./components/Login";
import Products from "./components/Products";
import Thanks from "./components/Thanks";
import Checkout from "./components/Checkout";
import AboutUs from "./components/AboutUs";
export const config = {
  endpoint: `https://qkart-frontend-v2-wfk3.onrender.com//api/v1`,
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Products} />
        <Route path="/checkout">
          <Checkout />
        </Route>

        <Route path="/thanks">
          <Thanks />
        </Route>
        {/* <Route exact path="/terms-of-service">
          <TermsOfService />
        </Route>
        <Route exact path="/privacy-policy">
          <PrivacyPolicy />
        </Route> */}
        <Route exact path="/aboutus" component={AboutUs}>
          <AboutUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
