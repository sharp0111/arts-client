import React from 'react';

export default class Navbar extends React.Component{
    render(){
        return(
            <nav className='navbar navbar-expand-md bg-dark'>
                <a className='navbar-brand' href=''>
                    <img src={require("./logo-white.png")} width="150" height="50" alt="" />
                </a>
            </nav>
        )
    }
}