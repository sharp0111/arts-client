import React from 'react';
import SearchFilterSection from '../SearchFilterSection/search-filter-section';
import Input from '../FormElements/input';
import {Field, FormSection, reduxForm} from 'redux-form';
import {required, nonEmpty} from '../../validators';
import AddResourceForm from './add-resource-form';

const BasicSection = props => {
    const{handleSubmit} = props;
    return(
        <form onSubmit = {handleSubmit}>
            <Field 
                component={Input}
                type="text"
                name="name"
                label="Name of Resource"
                validate={[required, nonEmpty]}
            />
            <FormSection name='category-type'>
                <SearchFilterSection />
            </FormSection>
            <div>
                <button type='submit' className='next'>Next</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'add-resource-form',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false,
})(BasicSection);

