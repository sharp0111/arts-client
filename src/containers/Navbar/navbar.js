import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import Search from '../Search/search';


export default class Navigation extends React.Component{
    render(){
        return(
            <Navbar className='bg-dark' fluid={true}>
                <Navbar.Brand>
                <Link to='/' className='navbar-brand' href=''>
                    <img src={require("./logo-white.png")} width="150" height="40" alt="logo for arts connective" />
                </Link>
                </Navbar.Brand>
                <Nav>
                    <NavItem eventKey={1} href='/form/login' className='nav-link'>
                        Log In
                    </NavItem>
                    <NavItem eventKey={1} href='/form/register' className='nav-link'>
                        Register
                    </NavItem>
                    <NavItem eventKey={1} href='/dashboard' className='nav-link'>
                        Dashboard
                    </NavItem>
                    <Search 
                        placeholder='Search'
                        key='navbar'
                        form='navbar-search'
                        formKey='navbar-search'
                    />
                </Nav>
            </Navbar>
        )
    }
}