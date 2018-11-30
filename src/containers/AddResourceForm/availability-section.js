import React from 'react';
import Input from '../FormElements/input';
import {Field, FormSection, reduxForm} from 'redux-form';
import {required, nonEmpty} from '../../validators';
import AddResourceForm from './add-resource-form';

const AvilabilitySection = props => {
    const{handleSubmit} = props;
    return(
        <form onSubmit = {handleSubmit}>
            <Field 
                component={Input}
                type="text"
                name="name"
                label="Name of Resource"
            />
            <div className='row form-navigation-buttons'>
                <button type='submit' className='form-next'>Next</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'add-resource-form',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false,
})(AvilabilitySection);

