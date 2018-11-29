import React from 'react';
import Input from '../FormElements/input';
import {Field, reduxForm} from 'redux-form';
import {required, nonEmpty} from '../../validators';


const LocationSection = props => {
    const {handleSubmit, previousPage} = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field 
                component={Input}
                type='textarea'
                label='Street Address'
                name='street'
            />
            <Field 
                component={Input}
                type='textarea'
                label='City'
                name='city'
            />
            <Field 
                component={Input}
                type='textarea'
                label='State'
                name='state'
            />
            <div className='row form-navigation-buttons'>
                <button type='button' className='form-back' onClick={previousPage}>
                    Back
                </button>
                <button type='submit' className='form-next'>
                    Submit
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'add-resource-form',
    destroyOnUnmount: false, 
    forceUnregisterOnUnmount: true, 
  })(LocationSection);