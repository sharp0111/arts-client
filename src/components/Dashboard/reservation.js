import React from 'react';
import {Image} from 'cloudinary-react';
import {Row, Col} from 'react-bootstrap';
import Button from '../../containers/FormElements/button'

export default function Reservation(props){
    return(
        <Row className='single-reservation'>
            <Col className='resv-image' med={3}>
            {props.resourceId.images.length > 0 ? 
                (<Image cloudName='arts-connective' 
                    publicId={props.resourceId.images[0]}
                    height='100' width='150'/>) : 
                null}
            </Col>
            <Col className='resv-name' med={3}>
                <h5>{props.resourceId.name}</h5>
                <p>{props.start_date} at {props.start_time}</p>
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