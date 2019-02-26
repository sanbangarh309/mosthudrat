import React from 'react';
import './css/Header.css';

import 'jquery';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap';
// import {Link} from 'react-router-dom';
var NavLink = require('react-router-dom').NavLink;
const Header = () => {

  return (
    <div className="sidebar" data-color="purple" data-image="assets/img/sidebar-5.jpg">
<div className="sidebar-wrapper">
            <div className="logo">
                <NavLink exact activeClassName='active' to='/'>Mostuhdrat
                </NavLink>
            </div>

            <ul className="nav">
                <li className="active">
                <NavLink exact activeClassName='active' to='/'><i className="pe-7s-graph"></i>
                        <p>Dashboard</p>
                </NavLink>
                </li>
                <li>
                <NavLink exact activeClassName='active' to='/'><i className="pe-7s-news-paper"></i>
                        <p>Categories</p>
                </NavLink>
                </li>
                <li>
                <NavLink exact activeClassName='active' to='/'><i className="pe-7s-note2"></i>
                        <p>Products</p>
                </NavLink>
                </li>
            </ul>
      </div>
    </div>
)};

export default Header;
