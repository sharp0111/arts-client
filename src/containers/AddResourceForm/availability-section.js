import React from 'react';
import Input from '../FormElements/input';
import {Field,  reduxForm, Control} from 'redux-form';
import Calendar from '../FormElements/calendar';
import {required, nonEmpty} from '../../validators';


class AvilabilitySection extends React.Component {

    logCalender = (value) => {
        console.log(value);
        console.log('sanity check');
    }

    render(){

        return(
            <form onSubmit = {this.props.onSubmit}>
                <Field 
                    component={Input}
                    type="text"
                    name="name"
                    label="Availability"
                />
            <div className='row form-navigation-buttons'>
                <button type='button' className='form-back' onClick={this.props.previousPage}>
                    Back
                </button>
                <button type='submit' className='form-next'>
                    Next
                </button>
            </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'add-resource-form',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false,
})(AvilabilitySection);

