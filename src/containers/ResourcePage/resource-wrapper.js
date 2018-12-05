import React from 'react';
import {connect} from 'react-redux';

import DisplayResource from '../../components/DisplayResource/display-resource';

export class ResourceWrapper extends React.Component{
    render(){
        if(this.props.resource){
            return(
                <div>
                    <p>Created</p>
                    <DisplayResource 
                        name={this.props.resource.name}
                        rate={this.props.resource.price_value}
                        unit={this.props.resource.unit}
                        additional={this.props.resource.addition}
                        calendar={this.props.resource.calendar}
                        description={this.props.resource.description}
                        type={this.props.resource.type}
                        category={this.props.resource.category}
                        street={this.props.resource.street}
                        city={this.props.resource.city}
                        state={this.props.resource.state}
                    />
                </div>
            )
        }
        return null;
    }
}

const mapStateToProps = state => ({
    resource: state.resources.selection
})

export default connect(mapStateToProps)(ResourceWrapper)