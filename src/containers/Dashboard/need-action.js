import React from 'react';
import Reservation from '../../components/Dashboard/reservation';

export default class NeedAction extends React.Component{
    render(){
        console.log(this.props.action)
        const needApproval = []
        const payInvoice = []
        for(let i=0; i<this.props.action.length; i++){
            console.log(this.props.userId)
            console.log(this.props.action[i].r.hostId)
            console.log(this.props.action[i].r.invoiceSent)
            if(this.props.action[i].r.hostId===this.props.userId && this.props.action[i].r.invoiceSent===undefined){
                console.log('needs approval')
                needApproval.push(
                    <Reservation
                        key={this.props.action[i].r._id}
                        {...this.props.action[i]}
                        name={this.props.action[i].r._id}
                        alert='    Needs Your Approval'
                    />
                )
            }else if(this.props.action[i].r.guestId===this.props.userId && this.props.action[i].r.invoiceSent){
                payInvoice.push(
                    <Reservation
                        key={this.props.action[i].r._id}
                        {...this.props.action[i]}
                        name={this.props.action[i].r._id}
                        alert='Pay Invoice'
                    />
                )
            }
        }
        return(
            <div>
                {needApproval}
                {payInvoice}
            </div>
        )
    }
}