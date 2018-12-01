import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from '../FormElements/input';

export class Search extends React.Component{

    onSubmit(value){
        console.log('submit')
        console.log(value)
    }

    render(){
        const formId=`${this.props.location}-search`
        const key=this.props.location

        return(
            <div className='search-box' >
                <form
                    className={`search-form ${this.props.location}-search-form`}
                    onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}
                >
                    <Field 
                        component={Input}
                        type='text'
                        name='search'
                        placeholder={this.props.placeholder}
                        key={key}
                        formId={formId}
                        formKey={key}
                    />
                </form>
            </div>
        );
    }
}

export default reduxForm({})(Search);