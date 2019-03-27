import React from "react";
import Tile from "./Tile";

import "./dashboard.css";

const Dashboard = ({humidity, pressure, temperature}) => (
    <div className="dashboard">
        <div className="row">
            <Tile title="Humidity" value={humidity} />
            <Tile title="Pressure" value={pressure} />
            <Tile title="Temperature" value={temperature} />
        </div>
    </div>
);

export default Dashboard;