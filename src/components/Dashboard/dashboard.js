import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Grid} from 'react-bootstrap';
import NeedAction from '../../containers/Dashboard/need-action';
import Pending from '../../containers/Dashboard/pending';
import Profile from './profile';
import './dashboard.css';

export default function Dashboard(props){
    return(
        <Grid className='dashboard'>
            <Row>
                <Profile user={props.user} phone={props.phone}/>
            </Row>
            <Row>
                <h3>Need Action</h3>
                <NeedAction {...props} />
            </Row>
            <Row>
                <h3>My Reservations</h3>
            </Row>
            <Row><h3>My Listings</h3></Row>
            <Row className='display-listings'>
                <div className='add-resource-link'>
                    <Link to='form/resource'>
                        + New
                    </Link>
                </div>
                {props.thumbnails}
            </Row>
        </Grid>
    )
}