import React from 'react';
//import Input from '../FormElements/input';
import {Field,  reduxForm, FormSection} from 'redux-form';
import TextArea from '../FormElements/textarea';
//import Hours from '../FormElements/hours';
//import {required, nonEmpty} from '../../validators';


const AvilabilitySection = props => {
    const{handleSubmit, previousPage} = props;
    return(
            <form onSubmit = {handleSubmit}>
                <Field 
                    component={TextArea}
                    type='textarea'
                    label='When is this resource available?'
                    name='availability'
                    rows={5}
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
    forceUnregisterOnUnmount: false,
})(AvilabilitySection);

