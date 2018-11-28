import React from 'react';
import SearchFilterSection from '../SearchFilterSection/search-filter-section';
import Input from '../FormElements/input';
import {Field, FormSection} from 'redux-form';
import {required, nonEmpty} from '../../validators';



export default class extends React.Component{
    render(){
        if(this.props.step === 'basic'){
        return(
            <div className="basic-information">
                <Field 
                    component={Input}
                    type='text'
                    label='Name of Resource'
                    name='name'
                    validate={[required, nonEmpty]}
                />
                <FormSection name='category-type'>
                    <SearchFilterSection/>
                </FormSection>
            </div>
        )}
        return null;
    }
}