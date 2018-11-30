import React from 'react';

export default class TextArea extends React.Component {

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
            <div className="form-textarea">
                <label htmlFor={this.props.name}>
                {this.props.label}
                    {error}
                    {warning}
                </label>
                <textarea
                    {...this.props.input}
                    id={this.props.name}
                    ref={value => (this.value = value)}
                    placeholder={this.props.placeholder}
                    rows={this.props.rows}
                />
            </div>
        );
    }
}