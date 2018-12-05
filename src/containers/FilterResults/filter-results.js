import React from 'react';
import SearchFilterSection from '../SearchFilterSection/search-filter-section';
import {reduxForm, FormSection} from 'redux-form';

class FilterResults extends React.Component{
    handleSubmit = (values) => {
        console.log(values)
    }
    render(){
        return(
            <div className='filter-results'>
            <FormSection name='filter-category-type'>
                <SearchFilterSection />
            </FormSection>
            </div>
        )
    }
}

export default reduxForm({form: 'filter-results'})(FilterResults)