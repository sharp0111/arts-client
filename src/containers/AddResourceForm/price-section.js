import React from 'react';
import Input from '../FormElements/input';
import TextArea from '../FormElements/textarea';
import {Field, reduxForm} from 'redux-form';
import {required, nonEmpty} from '../../validators';
import './resource-form.css';

const PriceSection = props => {
    const {handleSubmit, previousPage} = props;
    return(
        <form onSubmit={handleSubmit}>
            <div className='fields'>
                <div className='same-line-section'>
                    <div className='rate'>
                    <Field 
                        component={Input}
                        type='number'
                        label='Rate'
                        name='rate'
                        step={0.01}
                        min={0}
                    />
                    </div>
                    <div className='unit' >
                    <Field 
                        component={Input}
                        type='text'
                        label='Unit'
                        name='unit'
                    />
                    </div>
                </div>
                <Field 
                    component={TextArea}
                    type='textarea'
                    label='Additional'
                    name='additional'
                    rows={4}
                />
            </div>
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
})(PriceSection);