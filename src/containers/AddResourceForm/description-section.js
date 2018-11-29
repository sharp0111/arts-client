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
            <div>
                <button type='button' className='previous' onClick={previousPage}>
                    Back
                </button>
                <button type='submit' className='next'>
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
  