import React from 'react';
import Avatar from '../../containers/Avatar/avatar';

export default function Profile(props){
    return(
        <div className='profile-section'>
            <div className='profile-picture'>
                <Avatar 
                    image={props.user.avatar}
                    width='200'
                    height='200'
                />
            </div>
            <div className='profile-info'>
                <p className='profile-name'>{`${props.user.firstName} ${props.user.lastName}`}</p>
                <p className='profile-contact'>{props.user.email}</p>
                <p>{`${props.phone[0]} ${props.phone[1]}-${props.phone[2]}`}</p>
                <p className='profile-contact'>{props.user.address_1}</p>
                <p className='profile-contact'>{props.user.address_? props.user.address_2: null}</p>
                <p className='profile-contact'>{`${props.user.city}, ${props.user.state} ${props.user.zipcode}`}</p> 
            </div>
        </div>
    )
}