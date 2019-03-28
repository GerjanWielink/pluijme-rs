import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => (
    <div class="header">
        <Link to="/">
            <span>Pluijme.rs</span>
        </Link>
    </div>
);

export default Header;