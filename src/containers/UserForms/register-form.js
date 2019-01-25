import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser, fetchUserLogin} from '../../actions/index.actions';
import Input from '../FormElements/input';
import SelectInput from '../FormElements/select-input';
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';
import {Link} from 'react-router-dom';
import AvatarUploadWrapper from './avatar-upload-wrapper';
import './userforms.scss';

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

const state = [
    {value: 'nv', label: 'NV'},
]

export class RegistrationForm extends React.Component {
    constructor(){
        super()
        this.state = {
            image: null,
            st: null,
        }
        this.handleImage = this.handleImage.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleImage(data){
        console.log(data)
        this.setState({image: data})
    }

    handleChange(value){
        console.log(value.value)
        this.setState({st: value.value})
    }

    onSubmit(values){
        console.log(values)
        const {password, email, firstName, lastName, phone, address_1, address_2,
            city, zipcode} = values;
        const user = {password, email, firstName, lastName, phone, address_1, address_2,
            city, zipcode};
        user.avatar = this.state.image;
        user.state = this.state.st;
        console.log(this.state.st)
        console.log(user);
        return this.props.dispatch(registerUser(user))
            .then(() => this.props.dispatch(fetchUserLogin(email, password)));
    }

    render(){
        return (
            <div className='registration'>
            <div className='user-form'>
                <h2>Create an Account</h2>               
                <form  
                    className="registration-form form-single"
                    onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                    <div className='form-column'>
                        <AvatarUploadWrapper 
                            handleImage={this.handleImage}
                            image={this.state.image}
                        />
                        <div className='form-double'>
                            <Field
                                className='double-input'
                                component={Input}
                                type="text"
                                label="First Name"
                                name="firstName"
                                validate={[required, nonEmpty, isTrimmed]}
                            />
                            <Field
                                component={Input}
                                className='double-input'
                                type="text"
                                label="Last name"
                                name="lastName"
                                validate={[required, nonEmpty, isTrimmed]}
                            />
                        </div>
                        <Field
                            component={Input}
                            type="text"
                            label="Email"
                            name="email"
                            validate={[required, nonEmpty, isTrimmed]}
                        />
                        <Field
                            component={Input}
                            type="tel"
                            label="Phone number"
                            name="phone"
                        />
                    </div>
                    <div className='form-column' >
                    <Field
                        component={Input}
                        type="text"
                        label="Street Address line 1"
                        name="address_1"
                    />
                    <Field
                        component={Input}
                        type="text"
                        label="Street Address line 2"
                        name="address_2"
                    />
                    <Field
                        component={Input}
                        type="text"
                        label="City"
                        name="city"
                    />
                    <div className='form-double'>
                        <div className=' select-input-double double-input'>
                            <label>State</label>                
                            <Field
                                className='double-input'
                                component={SelectInput}
                                type="text"
                                label="State"
                                name="state"
                                options={state}
                                onChange={this.handleChange}
                            />
                        </div>
                        <Field
                            className='double-input'
                            component={Input}
                            type="text"
                            label="Zipcode"
                            name="zipcode"
                        />
                    </div>
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
                </div>
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
