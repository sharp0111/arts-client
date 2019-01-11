import React from 'react';

export default function Review(props){
    return(
        <div className='resource-review'>
            <div className='review-meta'>
                <div className='author-avatar'></div>
                <div className='author'>{props.author}</div>
                <div className='star-rating'></div>
            </div>
            <blockquote>{props.text}</blockquote>
        </div>
    )
}