import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import Media from 'react-media';
import Search from '../Search/search';
import Avatar from '../../containers/Avatar/avatar';
import {logoutUserRequest} from '../../actions/user-actions';
import './navbar.scss';

export class Navigation extends React.Component{
    constructor(){
        super()
        this.state = {
            profile_menu: false,
        }
    }

    handleLogOut = () => {
        console.log('log out')
        this.props.dispatch(logoutUserRequest());
    }

    render(){
        console.log(this.props.home)
        /*const logo = 
            <Media query = '(max-width: 765px)'>
                {matches =>
                    matches? <img src={require("../../assets/icon.png")} width="40" height="40" alt="logo for arts connective" /> :
                    <img src={require("../../assets/logo.png")} width="150" height="40" alt="logo for arts connective" />
                }
            </Media>*/
        
        const search = 
            <Media query = '(max-width: 765px)'>
                {matches =>
                    matches?
                        <Link to='/search'>S</Link>: 
                        <Search 
                            placeholder='Search'
                            key='navbar'
                            form='navbar-search'
                            formKey='navbar-search'
                        /> 
                }
            </Media>

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

        const lower = 
        <Media query = '(max-width: 765px)'>
            {matches =>
                matches?
                null:
                <div className='bottom-nav'>
                    {logNav}
                </div>
            }
        </Media>

        const logNav = this.props.loggedIn? loggedInNav : loggedOutNav;
        const profile = this.props.loggedIn?
         <div className='profile'>
             <Avatar
                image={this.props.avatar}
                width='50'
                height='50'
            />
         </div> : null;
        return(
            <Navbar fluid={true} className={this.props.home? 'homepage' : 'otherpage'}>
                <Navbar.Brand>
                    <Link to='/' className='navbar-brand' href=''>
                    </Link>
                </Navbar.Brand>
                <Nav className='center-links'>
                    <NavItem eventKey={1} href='/' className='nav-link'>
                        Home
                    </NavItem>
                    <NavItem eventKey={2} href='/' className='nav-link'>
                        FAQ
                    </NavItem>
                    <NavItem eventKey={3} href='/search' className='nav-link'>
                        Get Stuff
                    </NavItem>
                    <NavItem eventKey={2} href='/' className='nav-link'>
                        Provide Stuff
                    </NavItem>
                </Nav>
                {profile}
            </Navbar>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.user._id !==null,
    avatar: state.user.avatar
})

export default connect(mapStateToProps)(Navigation)