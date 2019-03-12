import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AddResourceWrapper from '../AddResourceWrapper/add-resource-wrapper';
import ImageUploadWrapper from '../ImageUpload/image-upload-wrapper';
import RegistrationForm from '../UserForms/register-form';
import LoginForm from '../UserForms/login-form';
import MakeReservationForm from '../Reservations/make-reservation-form';

export default class FormPage extends React.Component{

    render(){

        return(
            <div className="container form-page">
                <Switch>
                    <Route path={`${this.props.match.url}/resource`} component={AddResourceWrapper} />
                    <Route path={`${this.props.match.url}/register`} component={RegistrationForm} />
                    <Route path={`${this.props.match.url}/login`} component={LoginForm} />
                    <Route path={`${this.props.match.url}/reservation`} component={MakeReservationForm} />
                </Switch>
            </div>
        )
    }
}