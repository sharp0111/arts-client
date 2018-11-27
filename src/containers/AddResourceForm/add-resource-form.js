import React from 'react';
import {Field, reduxForm} from 'redux-form'


export class AddResourceForm extends React.Component{

    onSubmit(values){
        console.log(values);
    }

    render(){
        return(
            <form
                className='add-resource-form'
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
            >
            <p>Form</p>
            </form>
        )
    }
}

export default reduxForm('add-resource-form')(AddResourceForm);