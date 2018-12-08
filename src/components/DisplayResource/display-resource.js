import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './display-resource.css';
import ImageCarousel from '../../containers/ImageCarousel/imagecarousel';

export default function DisplayResource(props){
    
    return(
        <Row>
            <Col className='resource-image' md={6}>
                <ImageCarousel images={props.images} />
            </Col>
            <Col className='resource-info' md={6}>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <div className='price-info'>
                    <p><span>{props.value} </span> / <span> {props.unit}</span></p>
                    <p>{props.additional}</p>
                </div>
            </Col>
        </Row>
    )
}