import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Dashboard from '../../components/Dashboard/dashboard';
import {fetchUserBasicInfo} from '../../actions/user-actions';
import ResourceThumbnail from '../../components/DisplayResults/resource-thumbnail';

export class DashboardWrapper extends React.Component{

    componentDidMount(){
        this.props.dispatch(fetchUserBasicInfo(this.props.user.token))
    }

    getDate = () => {
        let currentDate = new Date();
        let currentMonth = currentDate.getMonth() + 1;
        let currentDay = currentDate.getDate();
        let currentYear = currentDate.getFullYear();
        let currentDateText = `${currentMonth}/${currentDay}/${currentYear}`
        console.log(currentDateText);
        return currentDateText
    }

    render(){
        const needAction = []
        /*let resv = this.props.pending
        for(let r of resv){
            if(r.guestId === this.props.user._id && !this.props.pending.invoiceSent){
                pendingApproval.push({r})
            }
            else{ needAction.push({r})}
        }*/

        let currentDateText = this.getDate;
        console.log(currentDateText);

        if(!this.props.loggedIn){
            return(
                <Redirect to='form/login' />
            )
        }

        const formattedPhone = []
        if(this.props.user.phone){
            formattedPhone.push(this.props.user.phone.slice(0,3))
            formattedPhone.push(this.props.user.phone.slice(3,6))
            formattedPhone.push(this.props.user.phone.slice(6,10))
        }

        let thumbnails = this.props.resources.map(item => 
                <ResourceThumbnail
                    imageUrl={(item.images.length > 0) ? item.images[0]: null}
                    key={item._id}
                    name={item.name}
                    value={(item.price_value/1000).toFixed([2])}
                    unit={item.price_unit}
                    id={item._id}
                    category={item.category}
                    verified={item.verified}
                />
            )
        thumbnails = thumbnails.reverse();
        return(
            <div className="container profile-page">
                <Dashboard 
                    action={needAction}
                    pending={this.props.pending}
                    userId ={this.props.user._id}
                    user={this.props.user}
                    phone={formattedPhone}
                    thumbnails={thumbnails}
               />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.user._id !== null,
    user: state.user,
    resources: state.resources.thumbnails,
    pending: state.reservations.pending,
    active: state.reservations.active,
})

export default connect(mapStateToProps)(DashboardWrapper)