import React from 'react';
import {BrowserRouter, NavLink, Route,Switch} from 'react-router-dom';
import Contact from './Contact.jsx';
import Menu from './Menu.jsx';
import web from "../src/images/neetu.JPG"
import Common from './Common.jsx';

const About = () => {
    return (
        <>
        <Common
        name="Welcome to About Page"
        imgsrc={web}
        visit="/contact"
        btName="Contact Now"/>
        </>
)
};

export default About;