import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser, fetchUserLogin} from '../../actions/index.actions';
import Input from '../FormElements/input';
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';
import {Link} from 'react-router-dom';

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {

    onSubmit(values){
        const {username, password, email} = values;
        const user = {username, password, email};
        console.log(user);
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(fetchUserLogin(username, password)));
    }

    render(){
        return (
            <div className='registration'>
            <div className='user-form'>
                <h2>Sign up for Money Jars</h2>
                
                <form  
                    className="login-form form-single"
                    onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                    <Field
                        component={Input}
                        type="text"
                        label="Username"
                        name="username"
                        validate={[required, nonEmpty, isTrimmed]}
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
