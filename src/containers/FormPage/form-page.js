import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AddResourceWrapper from '../AddResourceWrapper/add-resource-wrapper';
import ImageUploadWrapper from '../ImageUpload/image-upload-wrapper';

export default class FormPage extends React.Component{
    render(){

        return(
            <div className="container form-page">
                <Switch>
                    <Route path='/form/resource' component={AddResourceWrapper} />
                    <Route path='/form/image' component={ImageUploadWrapper} />
                </Switch>
            </div>
        )
    }
}