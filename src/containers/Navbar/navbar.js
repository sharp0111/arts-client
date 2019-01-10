import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import Search from '../Search/search';
import {logoutUserRequest} from '../../actions/user-actions';


export class Navigation extends React.Component{

    handleLogOut = () => {
        console.log('log out')
        this.props.dispatch(logoutUserRequest());
    }

    render(){
        const loggedOutNav = 
            <Nav>
                <NavItem eventKey={1} href='/form/login' className='nav-link'>
                    Log In
                </NavItem>
                <NavItem eventKey={2} href='/form/register' className='nav-link'>
                    Register
                </NavItem>
                <NavItem eventKey={3} href='/dashboard' className='nav-link'>
                    Dashboard
                </NavItem>
                <Search 
                    placeholder='Search'
                    key='navbar'
                    form='navbar-search'
                    formKey='navbar-search'
                />
            </Nav>
        
        const loggedInNav = 
            <Nav>
                <NavItem eventKey={1} className='nav-link' onClick={()=>this.handleLogOut()}>
                    Log Out
                </NavItem>
                <NavItem eventKey={3} href='/dashboard' className='nav-link'>
                    Dashboard
                </NavItem>
                <Search 
                    placeholder='Search'
                    key='navbar'
                    form='navbar-search'
                    formKey='navbar-search'
                />
        </Nav>

        const logNav = this.props.loggedIn? loggedInNav : loggedOutNav;

        return(
            <Navbar className='bg-dark' fluid={true}>
                <Navbar.Brand>
                <Link to='/' className='navbar-brand' href=''>
                    <img src={require("./logo-white.png")} width="150" height="40" alt="logo for arts connective" />
                </Link>
                </Navbar.Brand>
                {logNav}
            </Navbar>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.user._id !==null,
})

export default connect(mapStateToProps)(Navigation)