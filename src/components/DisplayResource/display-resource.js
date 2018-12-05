import React from 'react';

export default function DisplayResource(props){
    let imageURL = props.images? props.images[0]: null
    return(
        <div>
            <h2>{props.name}</h2>
            <div>
                {props.imageUrl? (<img src={props.imageUrl}/>) : null}
            </div>
            <p>{props.description}</p>
        </div>
    )
}