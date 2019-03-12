import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import YouTube from 'react-youtube';
import ColorList from '../../containers/ColorList/color-list';

export default function Faq(props){
    return(
        <div className='faq'>
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
                        <Link to='/form/register'>
                            <button>Sign Up</button>
                        </Link>
                    </Col>
                </Row>
                <h2>Browse By Category</h2>
                <Row className='color-wheel-section'>
                    <Col className='color-wheel' xs={0} md={8}>    
                        {props.colorWheel}
                    </Col>
                    <Col className='color-links' xs={12} md={4}>
                        <ColorList 
                            {... props}
                        />
                    </Col>
                </Row>
            </Grid>
        </div>
        
    )
}
