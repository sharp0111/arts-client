import React from 'react';
import {Jumbotron, Row, Col, Grid, ResponsiveEmbed} from 'react-bootstrap';
import Search from '../../containers/Search/search';
import './landing-page.css';

export default function DisplayLandingPage(props){
    return(
        <div className='landing-page'>
            <Jumbotron>
                <h1 className='header-text'>Arts Connective</h1>
                <div className='jumbotron-search'>
                    <h4 className='header-text'>What do you need?</h4>
                    <Search 
                        placeholder='e.g. dance studio'
                    />
                </div>                
            </Jumbotron>
            <Grid>
                <Row className='about-section'>
                    <h2>What is Arts Connective?</h2>
                    <Col className='about-video' xs={12} med={6}>
                        <div className='about-vidoe-wrapper'>
                            <ResponsiveEmbed a16by9>
                            </ResponsiveEmbed>
                        </div>
                    </Col>
                    <Col className='about-text' xs={12} med={6}>
                    </Col>
                </Row>
                <Row className='color-wheel-section'>
                    <h2>Browse By Category</h2>
                    <Col className='color-wheel' xs={0} med={6}>
                    </Col>
                    <Col className='color-links' xs={12} med={6}>
                    </Col>
                </Row>
                <Row className='highlight-section'>
                    <h2>Feature Stories</h2>
                    <Col className='highlight-story' xs={12} med={4}></Col>
                    <Col className='highlight-story' xs={12} med={4}></Col>
                    <Col className='highlight-story' xs={12} med={4}></Col>
                </Row>
            </Grid>
        </div>
    )
}