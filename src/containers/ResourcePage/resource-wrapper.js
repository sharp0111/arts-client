import React from 'react';
import {connect} from 'react-redux';

import DisplayResource from '../../components/DisplayResource/display-resource';

export class ResourceWrapper extends React.Component{
    
    render(){
        if(this.props.resource){
            return(
                <div>
                    <DisplayResource 
                        name={this.props.resource.name}
                        value={(this.props.resource.price_value/1000).toFixed([2])}
                        unit={this.props.resource.price_unit}
                        additional={this.props.resource.price_additional}
                        calendar={this.props.resource.calendar}
                        description={this.props.resource.description}
                        type={this.props.resource.type}
                        category={this.props.resource.category}
                        street={this.props.resource.street}
                        city={this.props.resource.city}
                        state={this.props.resource.state}
                        images={this.props.resource.images}
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