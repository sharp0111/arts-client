import React from 'react';
import {Jumbotron, Row, Col, Grid} from 'react-bootstrap';
import Search from '../../containers/Search/search';
import './landing-page.css';

export default function DisplayLandingPage(props){
    return(
        <div className='landing-page'>
            <Jumbotron className="sewing">         
            </Jumbotron>
            <Grid>
                <Row className='intro-section'>
                    <Col className='cartoon-wrapper' xs={12} md={3}>
                        <div className='cartoon-image sewing'>
                        </div>
                    </Col>
                    <Col className='info' xs={12} md={9}>
                        <h2>What are you looking for?</h2>
                        <Search 
                            placeholder='e.g. dance studio'
                            key='landing'
                            form='landing-search'
                            formKey='landing-search'
                        />
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}