import React from 'react';
import {connect} from 'react-redux';

import DisplayResource from '../../components/DisplayResource/display-resource';

export class SelectedResourceWrapper extends React.Component{
    render(){
        return(
            <div>
                <p>Selected</p>
                <DisplayResource />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    resource: state.resources.selection
})

export default connect(mapStateToProps)(SelectedResourceWrapper)