import React from 'react';
import Reservation from '../../components/Dashboard/reservation';

export default class Pending extends React.Component{
    render(){
        const pendingResv = []
        console.log(this.props.pending)
        for(let i=0; i<this.props.pending.length; i++){
            if(this.props.pending[i].guestId === this.props.userId){
                pendingResv.push(
                    <Reservation 
                        key={this.props.pending[i]._id}
                        {...this.props.pending[i]}
                    />
                )
            }
        }
        return(
            <div>
                {pendingResv}
            </div>
        )
    }
}