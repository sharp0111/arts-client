import React from 'react'
import Button from '../FormElements/button';

export default class FormNavigation extends React.Component{
    render(){
        if(this.props.step === 'basic'){
            return(
                <div className='row form-navigation-buttons'>
                    <Button 
                        onClick={this.props.next}
                        type='button'
                        className='form-next'
                        label='Next'
                    /> 
                </div>
            )
        }
        if(this.props.step === 'summary'){
            console.log('summary')
            return(
                <div className='row form-navigation-buttons'>
                    <Button
                        onClick={this.props.back}
                        type='button'
                        className='form-back'
                        label="Back"
                    />
                </div>
            )
        }

        return(
            <div className='row form-navigation-buttons'>
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