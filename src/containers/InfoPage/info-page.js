import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Faq from './faq';

export default class InfoPage extends React.Component{
    render(){
        return(
            <Switch>
                <Route path={`${this.props.match.url}/faq`} component={Faq} />
            </Switch>
        )
    }
}