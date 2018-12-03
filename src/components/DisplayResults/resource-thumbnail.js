import React from 'react';

export default function ResourceThumbnail(props){
    return(
        <div className='resource-thumbnail'>
            <div className='thumbnail-image'>
                <img src={require(`${props.image}`)} alt={props.alt}></img>
            </div>
            <div className='thumbnail-info'>
                <h3>{props.name}</h3>
                <p>{props.value} / {props.unti}</p>
            </div>
        </div>
    )
}