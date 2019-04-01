import React from "react";
import Tile from "./Tile";
import { Link } from "react-router-dom";

import "./dashboard.css";

const Dashboard = ({humidity, pressure, temperature, light}) => (
    <div className="dashboard">
        <div className="row">
            <Link to="/humidity">
                <Tile title="Humidity" value={humidity} />
            </Link>

            <Link to="/pressure">
                <Tile title="Pressure" value={pressure} />
            </Link>

            <Link to="/temperature">
                <Tile title="Temperature" value={temperature} />
            </Link>

            <Link to="/light">
                <Tile title="Light" value={light} />
            </Link>
        </div>
    </div>
);

export default Dashboard;