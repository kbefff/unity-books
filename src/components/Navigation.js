import React, { Component } from 'react';
import { FormGroup, FormControl, Button, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Cart from '../containers/Cart';


class Navigation extends React.Component {

    
    render() {
        return (

            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">UnityBooks</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                {/* Change from a to Link */}
                                <li><Link to="/components/Home.js">Home</Link></li>
                                <li><Link to="/components/About.js">About</Link></li>
                                <li><Link to="/components/books/Books.js">Books</Link></li>
                                <li><Link to="/components/Contact.js">Contact</Link></li>
                                <li><Cart /></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>

        
        );
    }
}

export default Navigation;

