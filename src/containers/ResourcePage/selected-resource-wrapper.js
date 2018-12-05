import React from 'react';
import {connect} from 'react-redux';
import ResourceWrapper from './resource-wrapper'
import DisplayResource from '../../components/DisplayResource/display-resource';

export class SelectedResourceWrapper extends React.Component{
    render(){
        return(
            <div>
                <p>Selected</p>
                <ResourceWrapper />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    resource: state.resources.selection
})

export default connect(mapStateToProps)(SelectedResourceWrapper)