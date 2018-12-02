import React from 'react';

export default function ColorWheel(props){
    return(
            <div className={`color-wheel-${props.color} color-wheel-image`} />
    )
}