import React from 'react';
import {connect} from 'react-redux';
import Button from '../FormElements/button';
import Overlay from '../../components/Modal/overlay';

export class MakeReservationWrapper extends React.Component{
    constructor(){
        super()
        this.state = {
            overlay: false,
            units: null,
            complete: false,
        }
    }

    handleClick = () => {
        this.setState({
            overlay: !this.state.overlay,
            complete: false,
        })
    }

    handleChange = (value) => {
        console.log(value.units);
        this.setState({
            units: value.units,
        })
    }

    completeReservation = () => {
        console.log('complete');
        this.setState({
            complete: true,
            overlay: false,
        })
    }


    render(){
        if(!this.props.loggedIn || !this.props.resource.verified){
            return null;
        }
        if(this.props.owner===true){
            return null;
        }
        console.log(this.state.overlay)
        let cost;
        if(this.state.units!==null){
            cost=(this.props.resource.price_value*this.state.units/1000).toFixed(2)
        }
        console.log(cost)
        let reserve = this.state.overlay?
            <div>
                <Overlay 
                    userId={this.props.user._id}
                    hostId={this.props.resource.hostId}
                    price_value={this.props.resource.price_value}
                    price_unit={this.props.resource.price_unit}
                    resourceId={this.props.resource._id}
                    cost={cost}
                    onChange={this.handleChange}
                    onComplete={this.completeReservation}
                />
            </div> :
            <div></div>
        let confirm = this.state.complete?
            <div>
                <h3>Thank You!</h3>
                <p>We'll let you know when your reservation is approved</p>
            </div>:
            <div></div>
        return(
            <div>
                <Button 
                    label={this.state.overlay?'Cancel': 'Reserve'}
                    onClick={this.handleClick}
                />
                {reserve}
                {confirm}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    resource: state.resources.selection,
    user: state.user,
    loggedIn: state.user._id !==null,
})

export default connect(mapStateToProps)(MakeReservationWrapper);