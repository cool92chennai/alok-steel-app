import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Menu from './Menu.jsx';
import web from '../src/images/neetu.JPG';
import Card from './Card';
import Sdata from './Sdata.jsx';

const Services = () => {
    return (
        <>
        <div className="my-5">
        <h1 className="text-center"> Our Products </h1>        
        </div>

        <div className="container-fluid mb-5">
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className="row gy-4">
                        {
                            Sdata.map((val,index) => {
                                return (<Card 
                                imgsrc={val.imgsrc}
                                title={val.title}
                                rate={val.rate}/>)
                            })
                            
                        }
                    </div>
                </div>
                
            </div>
        </div>

        </>
)
};

export default Services;