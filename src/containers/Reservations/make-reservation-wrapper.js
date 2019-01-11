import React from 'react';
import {connect} from 'react-redux';
import Button from '../FormElements/button';
import Overlay from '../../components/Modal/overlay';

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
        let reserve = this.state.overlay?
            <div>
                <Overlay 
                    onClick={this.handleClick}
                />
            </div> :
            <div></div>
        return(
            <div>
                <Button 
                    label={this.state.overlay?'Cancel': 'Reserve'}
                    onClick={this.handleClick}
                />
                {reserve}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    resource: state.resources.selection,
    user: state.user,
})

export default connect(mapStateToProps)(MakeReservationWrapper);