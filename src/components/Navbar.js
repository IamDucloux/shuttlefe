import React from 'react';
import logo from '../logo.png';
import Menu from './Menu'


const Navbar = () => {
    return (
        <navbar>
            <img src={logo} alt='Shuttle Logo'/>
            <Menu></Menu>
        </navbar>
    )
}

export default Navbar
