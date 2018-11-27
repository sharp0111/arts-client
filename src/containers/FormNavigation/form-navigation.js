import React from 'react'
import Button from '../FormElements/button';

export default class FormNavigation extends React.Component{
    render(){
        console.log(this.props.step)
        if(this.props.step === 'basic'){
            console.log('basic')
            return(
                <Button 
                onClick={this.props.next}
                type='button'
                className='form-next'
                label='Next'
            /> 
            )
        }
        if(this.props.step === 'summary'){
            console.log('summary')
            return(
                <Button
                onClick={this.props.back}
                type='button'
                className='form-back'
                label="Back"
            />
            )
        }

        return(
            <div className='row'>
                <Button
                    onClick={this.props.back}
                    type='button'
                    className='form-back'
                    label="Back"
                />
                <Button 
                    onClick={this.props.next}
                    type='button'
                    className='form-next'
                    label='Next'
                />
            </div>
        )
    }
}