import React from 'react';
import DisplayLandingPage from '../../components/DisplayLandingPage/display-landing-page';
import ColorWheel from '../../components/Color-Wheel/color-wheel';
import Media from 'react-media';

export default class LandingPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            color: 'full',
        }
    }

    //this worked better with display: none Let's fix that
    handleOnHover = (e) => {
        console.log(e.target.id)
        const color = e.target.id;
        this.setState({
            color: color,
        })
    }

    handleOnLeave = () => {
        this.setState({
            color: 'full'
        })
    }

    render(){
        let colorWheel = (
            <Media query='(min-width: 765px)'>
                {matches => matches? 
                    (<ColorWheel color={this.state.color}/>): null}
            </Media>
        )

        return(
            <div className="container-fluid landing-page-wrapper">
                <DisplayLandingPage                
                    colorWheel={colorWheel}
                    listHover={this.handleOnHover}
                    listLeave={this.handleOnLeave}
                    colorimage={this.state.color}
                />
            </div>
        )
    }
}