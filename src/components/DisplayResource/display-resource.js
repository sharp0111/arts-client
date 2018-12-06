import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './display-resource.css';

export default function DisplayResource(props){
    let imageURL = props.images? props.images[0]: null
    return(
        <Row>
            <Col className='resource-image' md={6}>
                {props.imageUrl? (<img src={props.imageUrl}/>) : null}
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