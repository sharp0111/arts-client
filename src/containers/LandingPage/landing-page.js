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

    render(){
        let colorWheel = (
            <Media query='(min-width: 765px)'>
                {matches => matches? 
                    (<ColorWheel color={this.state.color}/>): null}
            </Media>
        )

        return(
            <div className="container-fluid landing-page-wrapper">
                <DisplayLandingPage colorWheel={colorWheel}
                />
            </div>
        )
    }
}