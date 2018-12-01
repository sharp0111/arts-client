import React from 'react';
import DisplayLandingPage from '../../components/DisplayLandingPage/display-landing-page';

export default class LandingPage extends React.Component{
    render(){
        const opts = {
            height: '100%',
            width: '100%',
            playerVars: {
                fs: 1,
            }
        };
        return(
            <div className="container-fluid landing-page-wrapper">
                <DisplayLandingPage 
                    opts={opts}
                />
            </div>
        )
    }
}