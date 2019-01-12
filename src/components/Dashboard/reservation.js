import React from 'react';
import {Image} from 'cloudinary-react';
import {Row, Col} from 'react-bootstrap';
import Button from '../../containers/FormElements/button'

export default function Reservation(props){
    return(
        <Row className='single-reservation'>
            <Col className='resv-name' med={9}>
                <h5>{props.name}</h5>
            </Col>
            <Col className='resv-alert' med={3}>
                <p>{props.alert}</p>
            </Col>
            <Button>
                onClick={props.onClick}
                className={props.className}
                type={props.type}
                label={props.label}
            </Button>
        </Row>
    )
}