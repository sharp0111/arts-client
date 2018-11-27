import React from 'react';
import HelpPanelIcon from './help-panel-icon';

export default function HelpPanel(props){
    return(
        <div>
            <HelpPanelIcon />
            {props.text}
        </div>
    )
}