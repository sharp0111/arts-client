import React from 'react';

export default function Button(props){
    return(
        <button
            onClick={props.onClick}
            onChange={props.onChange}
            className={props.className}
            type={props.type}>
            {props.label}
        </button>
    )
}