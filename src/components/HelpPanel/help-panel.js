import React from 'react';
import HelpPanelIcon from './help-panel-icon';
import './help-panel.css';

export default function HelpPanel(props){
    return(
        <div className='help-panel'>
            <HelpPanelIcon />
                {props.text}
        </div>
    )
}