import React from 'react';
import {connect} from 'react-redux';

import DisplayResource from '../../components/DisplayResource/display-resource';

export class CreatedResourceWrapper extends React.Component{
    render(){
        return(
            <div>
                <p>Created</p>
                <DisplayResource />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    resource: state.resources.selection
})

export default connect(mapStateToProps)(CreatedResourceWrapper)