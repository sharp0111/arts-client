import React from 'react';

export default function ResourceThumbnail(props){
    return(
        <div className='resource-thumbnail'>
            <div className='thumbnail-image'>
                {props.imageUrl? (<img src={props.imageUrl}/>) : null}
            </div>
            <div className='thumbnail-info'>
                <h5>{props.name}</h5>
                <p>${props.value} / {props.unit}</p>
            </div>
        </div>
    )
}