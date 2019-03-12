import React from 'react';
import SearchFilterSection from '../SearchFilterSection/search-filter-section';
import Button from '../FormElements/button';
import {reduxForm, FormSection} from 'redux-form';

class FilterResults extends React.Component{

    handleCategory = (value) => {
        console.log(value.value)
    }

    handleType = (value) => {
        console.log(value.value)
    }

    render(){
        return(
            <div className='filter-results'>
            <FormSection name='filter-category-type'>
                <SearchFilterSection 
                    {...this.props}
                />
                <Button 
                    onClick={this.props.onClick}
                    label='Clear Filters'
                    className='form-button'
                    type='button'
                />
            </FormSection>
            </div>
        )
    }
}

export default reduxForm({form: 'filter-results'})(FilterResults)