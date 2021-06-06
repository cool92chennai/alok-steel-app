import React from 'react';
import {BrowserRouter, NavLink, Route,Switch} from 'react-router-dom';
import Contact from './Contact.jsx';
import Menu from './Menu.jsx';
import web from "../src/images/neetu.JPG"

const Common = (props) => {
    return (
        <>
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className='row'>
                <div className='col-10 mx-auto'>
                <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 justify-content-center flex-column">
                        <h1>{props.name} <strong>ALOKE Stainless Steel</strong></h1>
                        <h2 className="my-3"> 
                        Star of your KITCHEN and table LIFETYLE</h2>
                    
                    <div className="mt-3"> 
            <NavLink to={props.visit} className="btn-get-started">{props.btName}</NavLink>
                    </div>
                    </div>

                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={props.imgsrc} className="img-fluid animated" alt="home img" height="50px"/>

                    </div>
                    </div>
                </div>
                </div>
                </div>
        </section>
        </>
)
};

export default Common;