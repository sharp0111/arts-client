import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import Media from 'react-media';
import Search from '../Search/search';
import {logoutUserRequest} from '../../actions/user-actions';
import './navbar.scss';

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
            </Nav>
        
        const loggedInNav = 
            <Nav>
                <NavItem eventKey={1} className='nav-link' onClick={()=>this.handleLogOut()}>
                    Log Out
                </NavItem>
                <NavItem eventKey={2} href='/dashboard' className='nav-link'>
                    Dashboard
                </NavItem>
            </Nav>

        const logNav = this.props.loggedIn? loggedInNav : loggedOutNav;

        return(
            <Navbar fluid={true}>
                <div className='top-nav'>
                    <div className='left-nav'>
                        <Navbar.Brand>
                            <Link to='/' className='navbar-brand' href=''>
                                <img src={require("../../assets/logo.png")} width="150" height="40" alt="logo for arts connective" />
                            </Link>
                        </Navbar.Brand>
                        <Search 
                            placeholder='Search'
                            key='navbar'
                            form='navbar-search'
                            formKey='navbar-search'
                        />
                    </div>
                    <div className='profile'>

                    </div>
                </div>
                <div className='bottom-nav'>
                    {logNav}
                </div>
            </Navbar>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.user._id !==null,
})

export default connect(mapStateToProps)(Navigation)