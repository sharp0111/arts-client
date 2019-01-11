import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from '../FormElements/input';
import TextArea from '../FormElements/textarea';
import {required, nonEmpty} from '../../validators';

export class MakeReservationForm extends React.Component{

    onSubmit(values){
        console.log(values)
    }

    render(){
        
        return(
            <div className='make-reservation-form'>
                <form
                    className='reservation-form'
                    onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
                >
                    <Field 
                        component={Input}
                        type="date"
                        label="What day would you like this?"
                        name="date"
                        validate={[required, nonEmpty]}
                    />
                    <Field 
                        component={Input}
                        type="time"
                        label="What time should it start?"
                        name="time"
                        validate={[required, nonEmpty]}
                    />
                    <p>How long will you need it?</p>
                    <div>
                        <Field
                            component={Input}
                            type="number"
                            step={.5}
                            name='units'
                            validate={[required, nonEmpty]}
                        />
                        <p>{this.props.price_unit}s</p>
                    </div>
                    <Field 
                        component={TextArea}
                        label='Add a brief message for owner (optional)'
                        name='message'
                        rows={2}
                    />
                    <button
                        className='form-button'
                        type='submit'
                        disabled={this.props.pristing || this.props.submitting}
                    >
                    Request
                    </button>
                    <p>This reservation is subject to approval. The host may
                        request that you make changes pending availability
                    </p>
                </form> 
            </div>
        )
    }
}

export default reduxForm({form: 'MakeReservationForm'})(MakeReservationForm)