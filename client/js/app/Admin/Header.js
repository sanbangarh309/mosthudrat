import React from 'react';
import './css/material-dashboard.css';
import './css/font-awesome.min.css';
import './css/demo.css';
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
	        <a href="http://www.creative-tim.com" className="simple-text logo-normal">
	          Creative Tim
	        </a>
	      </div>

            <ul className="nav">
                <li className="active">
                <NavLink exact activeClassName='active' to='/'><i class="material-icons">dashboard</i>
                        <p>Dashboard</p>
                </NavLink>
                </li>
                <li>
                <NavLink exact activeClassName='active' to='/'><i class="material-icons">content_paste</i>
                        <p>Categories</p>
                </NavLink>
                </li>
                <li>
                <NavLink exact activeClassName='active' to='/'><i class="material-icons">library_books</i>
                        <p>Products</p>
                </NavLink>
                </li>
            </ul>
      </div>
    </div>
)};

export default Header;
