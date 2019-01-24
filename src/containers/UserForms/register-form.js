import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser, fetchUserLogin} from '../../actions/index.actions';
import Input from '../FormElements/input';
import SelectInput from '../FormElements/select-input';
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';
import {Link} from 'react-router-dom';
import './userforms.css';

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

const state = [
    {value: 'nv', label: 'NV'},
]

export class RegistrationForm extends React.Component {

    onSubmit(values){
        const {password, email, firstName, lastName, phone, address_1, address_2,
            city, state, zipcode} = values;
        const user = {password, email, firstName, lastName, phone, address_1, address_2,
            city, state, zipcode};
        console.log(user);
        /*return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(fetchUserLogin(username, password)));*/
    }

    render(){
        return (
            <div className='registration'>
            <div className='user-form'>
                <h2>Sign up for Rent Art Stuff</h2>               
                <form  
                    className="login-form form-single"
                    onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                    <Field
                        component={Input}
                        type="text"
                        label="First Name"
                        name="firstName"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <Field
                        component={Input}
                        type="text"
                        label="Last name"
                        name="lastName"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <Field
                        component={Input}
                        type="tel"
                        label="Phone number"
                        name="phone"
                    />
                    <Field
                        component={Input}
                        type="text"
                        label="Street Address line 1"
                        name="address_1"
                    />
                    <Field
                        component={Input}
                        type="text"
                        label="City"
                        name="city"
                    />
                    <label>State</label>
                    <Field
                        component={SelectInput}
                        type="text"
                        label="State"
                        name="state"
                        options={state}
                    />
                    <Field
                        component={Input}
                        type="text"
                        label="Zipcode"
                        name="zipcode"
                    />
                    <Field
                        component={Input}
                        type="text"
                        label="Email"
                        name="email"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <Field
                        component={Input}
                        type="password"
                        label="Password"
                        name="password"
                        validate={[required, passwordLength, isTrimmed]}
                    />
                    <Field  
                        component={Input}
                        type="password"
                        label="Confirm Password"
                        name="passwordConfirm"
                        validate={[required, nonEmpty, matchesPassword]}
                    />
                    <button
                        className='form-button green'
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}>
                        Register
                    </button>
                </form>
                <p> or <Link to='/form/login'>login to your account</Link></p>
            </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
