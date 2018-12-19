import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AddResourceWrapper from '../AddResourceWrapper/add-resource-wrapper';
import ImageUploadWrapper from '../ImageUpload/image-upload-wrapper';
import RegistrationForm from '../UserForms/register-form';
import LoginForm from '../UserForms/login-form';

export default class FormPage extends React.Component{
    render(){

        return(
            <div className="container form-page">
                <Switch>
                    <Route path='/form/resource' component={AddResourceWrapper} />
                    <Route path='/form/register' component={RegistrationForm} />
                    <Route path='/form/login' component={LoginForm} />
                </Switch>
            </div>
        )
    }
}