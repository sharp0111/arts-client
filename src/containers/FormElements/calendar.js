import React from 'react';
import {connect} from 'react-redux';
import AvailableTimes from 'react-available-times';

class Calendar extends React.Component{
     render(){

        return(
            <AvailableTimes 

            />
        );
    }
}

export default connect(s => s)(Calendar)