import React from 'react';
import {BrowserRouter, NavLink, Route,Switch} from 'react-router-dom';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Menu from './Menu.jsx';
import web from "../src/images/neetu.JPG"
import Common from './Common';

const Home = () => {
    return (
        <>
        <Common
        name="Grow your Business with"
        imgsrc={web}
        visit="/services"
        btName="Get Started"/>
        </>
)
};

export default Home;