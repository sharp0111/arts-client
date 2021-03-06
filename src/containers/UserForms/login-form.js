import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty} from '../../validators';
import {Link} from 'react-router-dom';
import Input from '../FormElements/input';
import {fetchUserLogin} from '../../actions/index.actions';


export class LoginForm extends React.Component {
    onSubmit(values) {
        console.log(values)
        return this.props.dispatch(fetchUserLogin(values.email, values.password));
    }

    render(){
        return (
            <div className='user-form log-in'>                
                <h2>Log in to your account</h2>
                    <form
                        className='login-form form-single'
                        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                        <div className='form-column'>
                        <Field
                            component={Input}
                            type='text'
                            label='Email'
                            name='email'
                            id='email'
                            validate={[required, nonEmpty]}
                        />
                        <Field
                            component={Input}
                            type="password"
                            label="Password"
                            name="password"
                            id="password"
                            validate={[required,nonEmpty]}
                        />
                        <button 
                            className='form-button green' 
                            disabled={this.props.pristine || this.props.submitting}>
                            Log in
                        </button>
                        </div>
                    </form>
                <p> or <Link to='/form/register'>Create a new account</Link></p>
            </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);