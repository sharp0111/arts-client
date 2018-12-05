import React from 'react';
import {connect} from 'react-redux';
import ResourceWrapper from './resource-wrapper'

import {fetchResource} from '../../actions/index.actions';

export class SelectedResourceWrapper extends React.Component{

    componentDidMount(){
        let id = this.getQueryVariable('id')
        console.log(id)
        if(id){
            this.props.dispatch(fetchResource(id))
        }
    }

    getQueryVariable = (variable) => {
        let query = window.location.search.substring(1);
        const querypart = query.split('&');
        for(let i=0; i<querypart.length; i++){;
            let querypair = querypart[i].split('=');
            if (querypair[0] === variable){return querypair[1]}
        }
        return (false);
    }

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