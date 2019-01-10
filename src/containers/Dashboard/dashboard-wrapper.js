import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Dashboard from '../../components/Dashboard/dashboard';

export class DashboardWrapper extends React.Component{
    //fetch refreshed user information on mount
    render(){
        console.log(this.props.loggedIn)
        if(!this.props.loggedIn){
            return(
                <Redirect to='form/login' />
            )
        }
        return(
            <div className="container profile-page">
                <Dashboard />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.user._id !== null,
    user: state.user
})

export default connect(mapStateToProps)(DashboardWrapper)