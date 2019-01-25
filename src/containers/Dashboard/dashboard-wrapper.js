import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Dashboard from '../../components/Dashboard/dashboard';
import {fetchUserBasicInfo} from '../../actions/user-actions';

export class DashboardWrapper extends React.Component{

    componentDidMount(){
        this.props.dispatch(fetchUserBasicInfo(this.props.user.token))
    }

    render(){
        const needAction = []
        const pendingApproval = []
        let resv = this.props.pending
        for(let r of resv){
            if(r.guestId === this.props.user._id && !this.props.pending.invoiceSent){
                pendingApproval.push({r})
            }
            else{ needAction.push({r})}
        }
        console.log(needAction)
        console.log(pendingApproval)
        console.log(this.props.loggedIn)
        if(!this.props.loggedIn){
            return(
                <Redirect to='form/login' />
            )
        }
        return(
            <div className="container profile-page">
                <Dashboard 
                    action={needAction}
                    pending={pendingApproval}
                    userId ={this.props.user._id}
                    user={this.props.user}
               />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.user._id !== null,
    user: state.user,
    pending: state.reservations.pending,
    active: state.reservations.action,
})

export default connect(mapStateToProps)(DashboardWrapper)