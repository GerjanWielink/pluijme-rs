import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Temperature from "./Temperature";
import Pressure from "./Pressure";
import Humidity from "./Humidity";

const Routes = () => (
    <Switch>
        <Route path="/humidity" exact component={Humidity} />
        <Route path="/pressure" exact component={Pressure} />
        <Route path="/temperature" exact component={Temperature} />
        <Route path="/" exact component={Dashboard} />
    </Switch>
);

export default Routes;
