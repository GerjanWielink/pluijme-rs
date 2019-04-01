import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Temperature from "./Temperature";
import Pressure from "./Pressure";
import Humidity from "./Humidity";
import Light from "./Light";

const Routes = () => (
    <React.Fragment>
        <Route path="/humidity" exact component={Humidity} />
        <Route path="/pressure" exact component={Pressure} />
        <Route path="/temperature" exact component={Temperature} />
        <Route path="/light" exact component={Light} />
        <Route path="/" exact component={Dashboard} />
    </React.Fragment>
);

export default Routes;
