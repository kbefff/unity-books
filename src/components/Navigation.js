import React, { Component } from 'react';
import { FormGroup, FormControl, Button, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Navigation extends React.Component {

    
    render() {
        return (
           
            // <Navbar>
            //   <Navbar.Header>
            //     <Navbar.Brand>
            //       <a href="#home">Unity Books</a>
            //     </Navbar.Brand>
            //     <Navbar.Toggle />
            //   </Navbar.Header>
            //   <Navbar.Collapse>
            //     <Navbar.Form pullLeft>
            //       <FormGroup>
            //         <FormControl type="text" placeholder="Search" />
            //       </FormGroup>{' '}
            //       <Button type="submit">Submit</Button>
            //     </Navbar.Form>
            //   </Navbar.Collapse>
            // </Navbar>


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
                                <li><Link to="/components/Navigation.js">Navigation</Link></li>
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

