import React from 'react';
import "./tile.css";

const Tile = ({title, value}) => (
    <div className="tile">
        <h4>{title}</h4>
        {value}
    </div>
);

export default Tile;
