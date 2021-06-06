import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <>
        <NavLink to='/'> About Us</NavLink>
        <NavLink to='/contact'> Contact Us</NavLink>
        </>

    )
};

export default Menu;