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
        let currentDateStandard = Date.parse(currentDateText)
        return currentDateStandard
    }

    render(){
        const needReview = []
        const upcoming = []
        /*let resv = this.props.pending
        for(let r of resv){
            if(r.guestId === this.props.user._id && !this.props.pending.invoiceSent){
                pendingApproval.push({r})
            }
            else{ needAction.push({r})}
        }*/

        let currentDateStandard = this.getDate();
        console.log(currentDateStandard);

        let reservations = this.props.active
        for (let resv of reservations){
            let reservationDateStandard = Date.parse(resv.start_date)
            if (currentDateStandard > reservationDateStandard){
                upcoming.push(resv)
            }else{
                needReview.push(resv)
            }
        }

        console.log(upcoming);
        console.log(needReview);

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
                    pending={this.props.pending}
                    userId ={this.props.user._id}
                    user={this.props.user}
                    phone={formattedPhone}
                    thumbnails={thumbnails}
                    action={this.needReview}
                    upcoming={this.upcoming}
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