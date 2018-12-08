import React from 'react';

export default function Review(props){
    return(
        <div className='resource-review'>
            <blockquote>{props.text}</blockquote>
            <div className='author'>{props.author}</div>
        </div>
    )
}