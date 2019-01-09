import React from 'react';
import {connect} from 'react-redux';

export class DashboardWrapper extends React.Component{
    render(){

        return(
            <div className="container profile-page">
                <p>Profile Page</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.resource.user
})

export default connect(mapStateToProps)(DashboardWrapper)