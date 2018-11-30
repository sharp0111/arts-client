import React from 'react';
import HelpPanelWrapper from '../../containers/HelpPanelWrapper/help-panel-wrapper';
//import FormNavigation from '../../containers/FormNavigation/form-navigation';
import ProgressBar from '../../containers/ProgressBar/progress-bar';
import AddResourceForm from '../../containers/AddResourceForm/add-resource-form';
import './add-resource.css';

export default function AddResource(props){
    return(
        <div className="add-resource">
            <h3>{props.step}</h3>
            <div className="progress-bar-wrapper row">
                <ProgressBar 
                    inner={props.index}
                    outer={props.length-1}
                />
            </div>
            <div className="add-resource-container row">
                <div className="col-md-6 resource-form-container">
                    <div className="resource-form-wrapper">
                        <AddResourceForm 
                            {...props}
                        />
                    </div>
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