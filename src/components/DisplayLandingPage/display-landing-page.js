import React from 'react';
import {Jumbotron, Row, Col, Grid} from 'react-bootstrap';
import YouTube from 'react-youtube';
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
                        key='landing'
                        form='landing-search'
                        formKey='landing-search'
                    />
                </div>                
            </Jumbotron>
            <Grid>
                <h2>What is Arts Connective?</h2>
                <Row className='about-section'>

                    <Col className='about-video' xs={12} md={6}>
                        <div className='video-wrapper'>
                            <YouTube 
                                videoId='50O85U7i4wU'
                                id='welcome-video'
                            />
                        </div>
                    </Col>
                    <Col className='about-text' xs={12} md={6}>
                        <p>
                            Collective memory obsolescence synthetic cultural discourse profound intuition multiplicity internarrative DNA.
                            Mimesis Frankfurt School fluidity ecology Self Derrida phenomenological experience
                            Transcend liminality ecology phenomenology semiotics of the object fluidity BioArt.
                        </p>
                        <ul>
                            <li>List item one</li>
                            <li>List item two</li>
                            <li>List item three</li>
                        </ul>
                        <button>Sign Up</button>
                    </Col>
                </Row>
                <h2>Browse By Category</h2>
                <Row className='color-wheel-section'>
                    <Col className='color-wheel' xs={0} md={6}>    
                        {props.colorWheel}
                    </Col>
                    <Col className='color-links' xs={12} md={6}>
                        <div className='placeholder'></div>
                    </Col>
                </Row>
                <h2>Feature Stories</h2>
                <Row className='highlight-section'>
                    <Col className='highlight-story' xs={12} md={4}></Col>
                    <Col className='highlight-story' xs={12} md={4}></Col>
                    <Col className='highlight-story' xs={12} md={4}></Col>
                </Row>
            </Grid>
        </div>
    )
}