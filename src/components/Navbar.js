import React from 'react';
import logo from '../logo.png';
import Menu from './Menu'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Navbar = () => {
    return (
        <navbar>
            <Link to="/">
                <img src={logo} alt='Shuttle Logo'/>
            </Link>
            <Menu></Menu>
        </navbar>
    )
}

export default Navbar
