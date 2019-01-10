
import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

export class DashboardWrapper extends React.Component{
    render(){
        console.log(this.props.loggedIn)
        if(!this.props.loggedIn){
            return(
                <Redirect to='form/login' />
            )
        }
        return(
            <div className="container profile-page">
                <p>Profile Page</p>
                <Link to='form/resource'>
                    + Add Resource
                </Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.user._id !== null,
    user: state.user
})

export default connect(mapStateToProps)(DashboardWrapper)