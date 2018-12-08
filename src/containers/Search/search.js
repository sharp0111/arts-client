import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from '../FormElements/input';
import {push} from 'connected-react-router';

export class Search extends React.Component{

    onSubmit(value){
        console.log('submit')
        console.log(value)
        this.props.dispatch(push('/search'))
        
    }

    render(){

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
                    />
                </form>
            </div>
        );
    }
}

export default reduxForm({})(Search);