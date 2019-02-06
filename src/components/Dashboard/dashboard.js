import React from 'react';
import {Link} from 'react-router-dom';
import NeedAction from '../../containers/Dashboard/need-action';
import Pending from '../../containers/Dashboard/pending';
import Profile from './profile';
import './dashboard.css';

export default function Dashboard(props){
    return(
        <div className='dashboard'>
            <Profile user={props.user} phone={props.phone}/>
            <div>
                <h3>Need Action</h3>
                <NeedAction {...props} />
            </div>
            <div>
                <h3>My Reservations</h3>
            </div>
            <div>
                <h3>My Listings</h3>
                <Link to='form/resource'>
                    + Add Listing
                </Link>
                {props.thumbnails}
            </div>
        </div>
    )
}