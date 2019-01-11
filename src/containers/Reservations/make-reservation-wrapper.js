import React from 'react';
import {connect} from 'react-redux';
import Button from '../FormElements/button';

export class MakeReservationWrapper extends React.Component{
    constructor(){
        super()
        this.state = {
            overlay: false,
        }
    }

    handleClick = () => {
        this.setState({
            overlay: !this.state.overlay
        })
    }

    render(){
        console.log(this.state.overlay)
        return(
            <div>
                <Button 
                    label='Reserve Now'
                    onClick={this.handleClick}
                />
            </div>
        )
    }

}

const mapStateToProps = state => ({
    resource: state.resources.selection,
    user: state.user,
})

export default connect(mapStateToProps)(MakeReservationWrapper);