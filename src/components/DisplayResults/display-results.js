import React from 'react';

import './display-results.css';

export default function DisplayResults(props){
    return(
        <div className='container display-results'>
            <div className='row'>
                <div className='results-filter-section col-md-2'>
                    <p>Filters displayed here</p>
                </div>
                <div className='results-display-section col-md-10'>
                    <h2>Available Resources</h2>
                    <div className='display-thumbnails'>
                        {props.thumbnails}
                    </div>
                </div>
            </div>
        </div>
    )
}