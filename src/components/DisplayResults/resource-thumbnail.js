import React from 'react';
import DisplayCategories from '../Display/display-categories';
import {Image} from 'cloudinary-react';
import {Link} from 'react-router-dom';
import {Col} from 'react-bootstrap';

export default function ResourceThumbnail(props){
    return(
        <Link to={`/resource/selected/?id=${props.id}`}>
            <div className='resource-thumbnail' xs={12} sm={6} md={4} lg={4}>
                <div className='thumbnail-image'>
                    {props.imageUrl? (<Image cloudName='arts-connective' publicId={props.imageUrl} height='250' width='300'/>) : null}
                </div>
                <div className='thumbnail-info'>
                    <DisplayCategories {...props} />
                    <h5>{props.name}</h5>
                    <p>${props.value} / {props.unit}</p>
                </div>
            </div>
        </Link>
    )
}