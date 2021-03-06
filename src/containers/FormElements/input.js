import React from 'react';

export default class Input extends React.Component {
    componentDidUpdate(prevProps){
        if (!prevProps.meta.active && this.props.meta.active){
            this.input.focus();
        }
    }
    render(){
        let error;
        if (this.props.meta.touched && this.props.meta.error){
            error = <div className="form-error">{this.props.meta.error}</div>
        };

        let warning;
        if (this.props.meta.touched && this.props.meta.warning){
            warning = <div className="form-warning">{this.props.meta.warning}</div>
        };


        return (
            <div className={`form-input ${this.props.className}`}>
                <label htmlFor={this.props.input.name}>
                {this.props.label}
                    {error}
                    {warning}
                </label>
                <input
                    {...this.props.input}
                    id={this.props.input.name}
                    type={this.props.type}
                    ref={input => (this.input = input)}
                    step={this.props.step}
                    placeholder={this.props.placeholder}
                    min={0}
                    max={this.props.max}
                    onChange={(value) => this.props.input.onChange(value)}
                    className={this.props.className}
                />
            </div>
        );
    }
}