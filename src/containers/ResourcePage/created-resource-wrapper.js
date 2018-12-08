import React from 'react';
import {connect} from 'react-redux';
import ResourceWrapper from './resource-wrapper'

export class CreatedResourceWrapper extends React.Component{
    render(){
        console.log(this.props.resource)
        if(this.props.resource !== null){
            return(
                <div>
                    <ResourceWrapper />
                </div>
            )
        }
        return null
    }
}

const mapStateToProps = state => ({
    resource: state.resources.selection
})

export default connect(mapStateToProps)(CreatedResourceWrapper)