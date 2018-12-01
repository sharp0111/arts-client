import React from 'react';

export default class Search extends React.Component{
    render(){
        return(
            <div className={`search-${this.props.className}`}>
                <label htmlFor={`searchbox-${this.props.className}`}>
                    Search
                </label>
                <input 
                    {...this.props.input}
                    id={`searchbox-${this.props.className}`}
                    type={text}
                    ref={input => (this.input = input)}
                    placeholder={this.props.placeholder}
                />
            </div>
        );
    }
}