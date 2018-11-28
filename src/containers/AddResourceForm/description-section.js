import React from 'react';
import Input from '../FormElements/input';
import {Field} from 'redux-form';
import {required, nonempty, nonEmpty} from '../../validators';

export default class DescriptionSection extends React.Component{
    render(){
        if(this.props.step === 'description'){
            return(
                <div className='resource-description form-section'>
                    <Field 
                        component={Input}
                        type='textarea'
                        label='Give a brief description'
                        name='description'
                        validate={[required, nonEmpty]}
                    />
                </div>
            )
        }
        return null;
    }
}