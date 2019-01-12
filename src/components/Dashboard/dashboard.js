import React from 'react';
import {Link} from 'react-router-dom';
import NeedAction from '../../containers/Dashboard/need-action';
import Pending from '../../containers/Dashboard/pending';
import './dashboard.css';

export default function Dashboard(props){
    return(
        <div className='dashboard'>
            <h2>This will be the main user page</h2>
            <div>
                <h3>Profile section</h3>
                <p>Maybe just a link or collapsed part, since they probably
                    won't have to look at it all the time? Mostly for editing
                </p>
            </div>
            <div>
                <h3>Need Action</h3>
                <NeedAction {...props} />
                <h3>Pending Approval</h3>
                <Pending {...props}/>
            </div>
            <div>
                <h3>Reservation sections</h3>
                <p>Show upcoming reservations. I'd love some thoughts on an easy way to do this.
                    One list, with both types (guess & host) or two seperate lists? Ideally,
                    a calendar but that might take a little longer
                </p>
            </div>
            <div>
                <h3>Your Resources Section</h3>
                <Link to='form/resource'>
                    + Add Resource
                </Link>
                <p>We could put thumbnails here or just a link to show all
                    of their listings.
                </p>
            </div>
        </div>
    )
}