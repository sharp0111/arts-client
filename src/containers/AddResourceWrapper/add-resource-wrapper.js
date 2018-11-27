import React from 'react';
import AddResource from '../../components/AddResource/add-resource';
import {connect} from 'react-redux';

export class AddResourceWrapper extends React.Component{
    constructor(){
        super()
        this.state = {
            step: "basic",
        }
    }
    render(){
        return(
            <div>
                <AddResource 
                    step={this.state.step}
                />
            </div>
        )
    }
}

const mapStatetoProps = state => ({

})

export default connect(mapStatetoProps)(AddResourceWrapper)