import React from 'react';
import {Popover} from 'react-bootstrap';
import {OverlayTrigger} from 'react-bootstrap';

export default function HelpPanelOverlay(props){
    console.log(props.title)
    return(
        <div>
            <OverlayTrigger trigger='click' overlay={<HelpPanelPopover {...props}/>} className='bottom'>
                <button>Info</button>
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
