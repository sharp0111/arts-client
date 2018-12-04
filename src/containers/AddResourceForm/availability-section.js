import React from 'react';
import Input from '../FormElements/input';
import {Field,  reduxForm, FormSection} from 'redux-form';
import Hours from '../FormElements/hours';
import {required, nonEmpty} from '../../validators';


const AvilabilitySection = props => {
    const{handleSubmit, previousPage} = props;
    return(
        <form onSubmit = {handleSubmit}>
            <FormSection name="mon" label="Monday">
                <Hours day="Monday"/>
            </FormSection>
            <FormSection name="tue" label="Tuesday">
                <Hours day="Tuesday"/>
            </FormSection>
            <FormSection name="wed" label="Wednesday">
                <Hours day="Wednesday"/>
            </FormSection>
            <FormSection name="thu" label="Thursday">
                <Hours day="Thursday"/>
            </FormSection>
            <FormSection name="fri" label="Friday">
                <Hours day="Friday"/>
            </FormSection>
            <FormSection name="sat" label="Saturday">
                <Hours day="Saturday"/>
            </FormSection>
            <FormSection name="sun" label="Sunday">
                <Hours day="Sunday"/>
            </FormSection>
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

