import React from 'react';
import {FormSection, reduxForm} from 'redux-form'
import BasicSection from './basic-section';
import DescriptionSection from './description-section';

export class AddResourceForm extends React.Component{

    onSubmit(values){
        console.log(values);
    }

    render(){
        console.log(this.props.step)
        return(
            <form
                className='add-resource-form'
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
            >
                <FormSection name='basic-section'>
                    <BasicSection 
                        step={this.props.step}
                    />
                </FormSection>
                <FormSection name='description-section'>
                    <DescriptionSection 
                        step={this.props.step}
                     />
                </FormSection>
            </form>
        )
    }
}

export default reduxForm({form: 'add-resource-form'})(AddResourceForm);