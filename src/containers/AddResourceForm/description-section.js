import React from 'react';
import Input from '../FormElements/input';
import {Field, reduxForm} from 'redux-form';
import {required, nonEmpty} from '../../validators';


const DescriptionSection = props => {
    const {handleSubmit, previousPage} = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field 
                component={Input}
                type='textarea'
                label='Give a brief description'
                name='description'
                validate={[required, nonEmpty]}
            />
            <div className='row form-navigation-buttons'>
                <button type='button' className='form-back' onClick={previousPage}>
                    Back
                </button>
                <button type='submit' className='form-next'>
                    Next
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'add-resource-form',
    destroyOnUnmount: false, 
    forceUnregisterOnUnmount: true, 
  })(DescriptionSection);
  