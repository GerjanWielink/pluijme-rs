import React from 'react';
import pluijmpje from '../static/pluijmpje-up.png';

import './loader.css';

const Loader = () => (
    <div className="loader-container">
        <img
            className="loader"
            src={pluijmpje}
            alt="Geil"
        />

        <h1>Loading...</h1>
    </div>
);

export default Loader;