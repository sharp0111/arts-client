import React from 'react';
import {Field} from 'redux-form';
import Input from './input';

export default class Hours extends React.Component{
    render(){
        return(
            <div className='day-schedule'>
               <div className='day-title'>
                   <h5>{this.props.day}</h5>
               </div>
                <div className='start-time schedule-time' xs={5}>
                        <Field
                            component={Input}
                            label='Start time'
                            type='number'
                            step={1}
                            placeholder={6}
                            min={0}
                            max={23}
                            name={`${this.props.day}-start`}
                            id={`${this.props.day}-start`}
                        />
               </div>
               <div className='end-time schedule-time'>
                    <Field
                        component={Input}
                        label='End time'
                        type='number'
                        step={1}
                        placeholder={16}
                        min={1}
                        max={24}
                        name={`${this.props.day}-end`}
                        id={`${this.props.day}-end`}
                    />
               </div>
            </div>
        )
    }
}