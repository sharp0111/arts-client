import React from 'react';
import Reservation from '../../components/Dashboard/reservation';

export default class Pending extends React.Component{
    render(){
        const pendingResv = []
        for(let i=0; i<this.props.pending.length; i++){
            pendingResv.push(
                <Reservation 
                    key={this.props.pending[i].r._id}
                    {...this.props.pending[i]}
                    name={this.props.pending[i].r._id}
                />
            )
        }
        return(
            <div>
                {pendingResv}
            </div>
        )
    }
}