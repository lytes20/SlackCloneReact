import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import { Login, Register } from '../components/auth'
import Messaging from '../components/coremessaging'

const routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/messaging" exact component={Messaging} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default routes;
