import React from 'react';
import SelectInput from '../FormElements/select-input';
import {Field, reduxForm} from 'redux-form';

const category = [
    {value: 'per', label: 'Performing Arts'},
    {value: 'mus', label: 'Music'},
    {value: 'fin', label: 'Fine Art'},
    {value: 'dig', label: 'Digital Art'},
    {value: 'cra', label: 'Crafts'},
    {value: 'fab', label: 'Fabrication'}
]

const type = [
    {value: 'venue', label: 'Venue'},
    {value: 'gear', label: 'Gear'}
]

export class SearchFilterForm extends React.Component {
    render(){
        return(
            <div className='filter-form'>
                <h4>Filter Results</h4>
                <form
                    className='search-filter-form'
                >
                    <label>Category</label>
                    <Field
                        component={SelectInput}
                        type='text'
                        label='Category'
                        name='category'
                        options={category}
                    />
                    <label>Type</label>
                    <Field  
                        component={SelectInput}
                        type='text'
                        label='Type'
                        name='type'
                        options={type}
                    />
                </form>
            </div>
        )
    }
}

export default reduxForm({form: 'search-filter-form'})(SearchFilterForm);