import React from 'react';
import MakeReservationForm from '../../containers/Reservations/make-reservation-form';
import './modal.css';


export default function Overlay(props){
    return(
        <div className='overlay'>
            <MakeReservationForm {...props} />
        </div>
    )
}