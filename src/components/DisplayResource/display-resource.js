import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import DisplayCategories from '../Display/display-categories';
import './display-resource.css';
import ImageCarousel from '../../containers/ImageCarousel/imagecarousel';
import ReviewsWrapper from '../../containers/Reviews/reviews-wrapper';

export default function DisplayResource(props){
    
    return(
        <Grid>
        <Row>
            <Col className='resource-image' md={6}>
                <ImageCarousel images={props.images} />
                <DisplayCategories category={props.category}/>
            </Col>
            <Col className='resource-info' md={6}>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <div className='price-info'>
                    <p className='price-rate'><span>{props.value} </span> / <span> {props.unit}</span></p>
                    <p>{props.additional}</p>
                </div>
            </Col>
        </Row>
        <Row>
            <Col className='display-reviews' md={8}>
                <ReviewsWrapper reviews={props.reviews} />
            </Col>
        </Row>
        </Grid>
    )
}