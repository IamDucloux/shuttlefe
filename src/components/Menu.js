import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Menu = () => {
    return (
        <div className="menu_list">
            <ul>
                <li><Link to="/reservas">Reservar</Link></li>
                <li><Link to="/concesionarios">Concesionarios</Link></li>
                <li><Link to="/Vehiculos">Vehiculos</Link></li>
            </ul>
        </div>
    )
}

export default Menu
