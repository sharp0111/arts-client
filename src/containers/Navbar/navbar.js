import React from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import Search from '../Search/search';


export default class Navigation extends React.Component{
    render(){
        return(
            <Navbar className='bg-dark' fluid={true}>
                <Navbar.Brand>
                <a className='navbar-brand' href=''>
                    <img src={require("./logo-white.png")} width="150" height="40" alt="logo for arts connective" />
                </a>
                </Navbar.Brand>
                <Nav>
                    <Search 
                        placeholder='find things'
                    />
                </Nav>
            </Navbar>
        )
    }
}