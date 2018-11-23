import React from 'react';

export default function Button(props){
    return(
        <button
            onClick={this.props.onClick}
            className={this.props.className}
            type={this.props.type}>
            {this.props.label}
        </button>
    )
}