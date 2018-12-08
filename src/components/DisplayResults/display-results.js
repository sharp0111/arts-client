import React from 'react';
import {Row} from 'react-bootstrap';

import './display-results.css';

export default function DisplayResults(props){
    return(
        <div className='results-display-section col-md-9'>
            <h2>Available Resources</h2>
            <Row className='display-thumbnails'>
                {props.thumbnails}
            </Row>
        </div>
    )
}