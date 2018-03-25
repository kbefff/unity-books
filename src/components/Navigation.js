import React, { Component } from 'react';
import { FormGroup, FormControl, Button, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';

class Navigation extends React.Component {

    
    render() {
        return (
           
            <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Brand</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Navbar.Form pullLeft>
      <FormGroup>
        <FormControl type="text" placeholder="Search" />
      </FormGroup>{' '}
      <Button type="submit">Submit</Button>
    </Navbar.Form>
  </Navbar.Collapse>
</Navbar>
        
        );
    }
}

export default Navigation;
