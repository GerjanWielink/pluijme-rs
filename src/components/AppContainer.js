import React from "react";
import Header from "./Header";

import "./app-container.css";

const AppContainer = ({ children }) => (
    <div className="container">
        <Header />
        {children}
    </div>
);

export default AppContainer;