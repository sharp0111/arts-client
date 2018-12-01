import React from 'react';
import DisplayLandingPage from '../../components/DisplayLandingPage/display-landing-page';

export default class LandingPage extends React.Component{
    render(){

        return(
            <div className="container-fluid landing-page-wrapper">
                <DisplayLandingPage />
            </div>
        )
    }
}