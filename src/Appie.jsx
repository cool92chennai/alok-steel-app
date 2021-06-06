import React from 'react';
import {BrowserRouter, Redirect, Route,Switch} from 'react-router-dom';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx';
import Menu from './Menu.jsx';
import Services from './Services.jsx';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';
import Footer from './Footer';

const Appie = () => {
    return (
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/" />
        </Switch>
        <Footer/>
        </>
)
};

export default Appie;