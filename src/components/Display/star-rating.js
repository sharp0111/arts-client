import React from 'react';
import './display.css';

export default function StarRating(props){
    let percentage = Math.floor((props.stars/5)*100)
    return(
        <div className='star-rating'>
            <div className='star-image'></div>
            <Filler percentage={percentage} />
        </div>
    )
}

const Filler = (props) => {
    return (
        <div className="star-filler"
            style={{width: `${props.percentage}%`}}
        />
    )
}