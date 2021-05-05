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
                <Link to="/reservas"><li>Reservar</li></Link>
                <Link to="/concesionarios"><li>Concesionarios</li></Link>
                <Link to="/Vehiculos"><li>Vehiculos</li></Link>
            </ul>
        </div>
    )
}

export default Menu
