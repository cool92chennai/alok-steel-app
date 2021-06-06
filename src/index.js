import React from 'react';
import ReactDOM from 'react-dom';
import Appie from './Appie.jsx';
import Menu from './Menu.jsx';
import {BrowserRouter} from 'react-router-dom';
import './index.css';

ReactDOM.render(
<BrowserRouter>
    <Appie/>
</BrowserRouter>,document.getElementById('root'));