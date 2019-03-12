import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import DisplayCategories from '../Display/display-categories';
import './display-resource.scss';
import ImageCarousel from '../../containers/ImageCarousel/imagecarousel';
import ReviewsWrapper from '../../containers/Reviews/reviews-wrapper';
import MakeReservationWrapper from '../../containers/Reservations/make-reservation-wrapper';

export default function DisplayResource(props){
    console.log(props.verified)
    console.log(props.reviews)
    return(
        <Grid>
        <Row>
            <Col className='resource-image' md={6}>
                <ImageCarousel images={props.images} />
                <DisplayCategories category={props.category}/>
            </Col>
            <Col className='resource-info' md={6}>
                <div className='preview-warning'>
                    {props.verified? null: 
                        <p>This is a preview. It will be live once approved</p>}
                </div>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <div className='price-info'>
                    <p className='price-rate'><span>{props.value} </span> / <span> {props.unit}</span></p>
                    <p>{props.additional}</p>
                </div>
                <MakeReservationWrapper owner={props.owner}/>
            </Col>
        </Row>
        <Row>
            <Col className='display-reviews' md={8}>
                {props.verified?
                    <ReviewsWrapper reviews={props.reviews}/>
                    : null}
            </Col>
        </Row>
        </Grid>
    )
}