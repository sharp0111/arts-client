import React from 'react';
import AvailableTimes from 'react-available-times';

export default class Calendar extends React.Component{
     render(){
        return(
            <AvailableTimes 
                recurring={this.props.recurring}
                height={this.props.height}
                onChange={this.props.logChange}
            />
        )
    }
}