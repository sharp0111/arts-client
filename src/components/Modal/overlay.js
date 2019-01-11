import React from 'react';
import Modal from '../../containers/FormElements/modal';
import './modal.css';


export default function Overlay(props){
    return(
        <div className='overlay'>
            <Modal {...props}/>
        </div>
    )
}