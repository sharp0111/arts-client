import React from 'react';
import HelpPanelWrapper from '../../containers/HelpPanelWrapper/help-panel-wrapper';

export default function AddResource(props){
    return(
        <div className="add-resource">
            <div className="progress-bar-wrapper row"></div>
            <div className="add-resource-container row">
                <div className="resource-form-wrapper col-md-6">
                    <h2>{props.step}</h2>
                </div>
                <div className="help-panel-wrapper col-md-6">
                    <HelpPanelWrapper 
                        step={props.step}
                    />
                </div>
            </div>
        </div>
    )
}