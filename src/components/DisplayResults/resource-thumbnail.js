import React from 'react';
import DisplayCategories from '../Display/display-categories';
import {Image} from 'cloudinary-react';
import {Link} from 'react-router-dom';
import {Col} from 'react-bootstrap';
import StarRating from '../Display/star-rating';

export default function ResourceThumbnail(props){
    let stars = (Math.random()*4)
    return(
        <Link to={`/resource/?id=${props.id}`}>
            <div className='resource-thumbnail'>
                <div className='thumbnail-image'>
                    <DisplayCategories {...props} />
                    {props.verified? null: 
                        <div className='pending-verification'>
                            <p>Pending</p>
                        </div>}
                    {props.imageUrl? (<Image cloudName='arts-connective' publicId={props.imageUrl} height='200' width='300'/>) : null}
                </div>
                <div className='thumbnail-info'>
                    <StarRating stars={stars} />
                    <h5>{props.name}</h5>
                    <p className='thumbnail-rate'>
                        <span className='thumbnail-price'>${props.value}</span> 
                        /{props.unit}</p>
                </div>
            </div>
        </Link>
    )
}