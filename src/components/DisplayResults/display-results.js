import React from 'react';

import './display-results.css';

export default function DisplayResults(props){
    return(
        <div className='container display-results'>
            <div className='row'>
                <div className='results-filter-section col-md-3'>
                    <p>Filters displayed here</p>
                </div>
                <div className='results-display-section col-md-9'>
                    {props.thumbnails}
                </div>
            </div>
        </div>
    )
}