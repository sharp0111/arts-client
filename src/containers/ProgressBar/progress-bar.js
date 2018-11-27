import React from 'react';
import './progress-bar.css';

export default function ProgressBar(props){

    let percentage = Math.floor(props.index/(props.length-1)*100)
    console.log(props.index);
    console.log(props.length);
    console.log(percentage)
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