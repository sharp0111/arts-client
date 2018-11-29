import React from 'react';
import './progress-bar.css';

export default function ProgressBar(props){

    let percentage = Math.floor(props.inner/(props.outer)*100)
    return(
        <div className='progress'>
            <Filler percentage={percentage} />
        </div>
    )
}

const Filler = (props) => {
    return (
        <div className="filler progress-bar bg-secondary"
            style={{width: `${props.percentage}%`}}
        />
    )
}