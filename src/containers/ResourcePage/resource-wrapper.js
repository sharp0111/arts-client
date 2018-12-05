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
                        imageUrl={(this.props.resource.images.length > 0) ? this.props.resource.images[0]: null}
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