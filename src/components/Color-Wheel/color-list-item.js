import React from 'react';
import {Link} from 'react-router-dom';

export default function ColorListItem(props){
    return(
        <li>
            <div className={`digital-art-link icon-${props.color}`}></div>
            <Link to={`/search/category/${props.category}`}>{props.category}</Link>
        </li>
    )
}