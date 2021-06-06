import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/neetu.JPG';
import Sdata from './Sdata';
import cooker from "../src/images/Cooker.PNG"
import steamer from "../src/images/Steamer.PNG"
import milkPan from "../src/images/MilkPan.PNG"
import cookwareSet from "../src/images/CookwareSet.PNG"
import tawa from "../src/images/Tawa.PNG"
import casserole from "../src/images/Casserole.PNG"


const Card = (props) => {
    return (
        <>
        <div className="col-md-4 col-10 mx-auto">
                        <div class="card">
                            <img src={`../images/${props.imgsrc}`} class="card-img-top" alt={props.imgsrc}/>
                                <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">Price Rs. {props.rate}</p>
                                <NavLink to="/" class="btn btn-primary">Go somewhere</NavLink>
                                </div>
                        </div>
                        </div>
        </>
    )
};

export default Card;
