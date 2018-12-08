import React from 'react';
import{Switch, Route} from 'react-router-dom';
import SelectedResourceWrapper from './selected-resource-wrapper';
import CreatedResourceWrapper from './created-resource-wrapper';
import ResourceWrapper from './resource-wrapper';

export default class ResourcePage extends React.Component{
    render(){

        return(
            <div className="container resource-page">
                <Switch>
                    <Route path='/resource/created' component={CreatedResourceWrapper} />
                    <Route path='/resource/selected' component={SelectedResourceWrapper} />
                </Switch>
            </div>
        )
    }
}