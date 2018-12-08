import React from 'react';
import {Popover} from 'react-bootstrap';
import {OverlayTrigger} from 'react-bootstrap';

export default function HelpPanelOverlay(props){
    console.log(props.title)
    return(
        <div className='overlay-trigger'>
            <OverlayTrigger trigger='click' overlay={<HelpPanelPopover {...props}/>} className='bottom'>
                <button className='info-button'></button>
            </OverlayTrigger>
        </div>
    )
}

const HelpPanelPopover = (props) => {   
    return(
        <Popover id='help-panel-popover' title={props.title}>
            <div className='help-panel'>
                {props.text}
            </div>
        </Popover>
    )
}

