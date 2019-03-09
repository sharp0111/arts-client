import React from 'react';
import {Jumbotron, Row, Col, Grid} from 'react-bootstrap';
import Search from '../../containers/Search/search';
import './landing-page.css';

export default function DisplayLandingPage(props){
    return(
        <div className='landing-page'>
            <Jumbotron className={props.image}>         
            </Jumbotron>
            <Grid>
                <Row className='intro-section'>
                    <Col className='cartoon-wrapper' xs={12} md={4}>
                        <div className={`cartoon-image ${props.image}`}>
                        </div>
                    </Col>
                    <Col className='info' xs={12} md={8}>
                        <h2>What are you looking for?</h2>
                        <Search 
                            key='landing'
                            form='landing-search'
                            formKey='landing-search'
                        />
                        <p>RentArtStuff.com connects artists to the tools, equipment, and spaces they need.</p>
                        <p>We know it's hard to find specialized creative tools. It can be prohibitively
                            expensive to buy them outright, especially when your usage will be limited. We also
                            know that those same tools are often collecting dust in garages and storage units
                            all around your city.
                        </p>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}