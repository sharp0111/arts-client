import React from 'react';
import HelpPanelWrapper from '../../containers/HelpPanelWrapper/help-panel-wrapper';
import FormNavigation from '../../containers/FormNavigation/form-navigation';

export default function AddResource(props){
    return(
        <div className="add-resource">
            <div className="progress-bar-wrapper row"></div>
            <div className="add-resource-container row">
                <div className="col-md-6">
                    <div className="resource-form-wrapper">
                        <h2>{props.step}</h2>
                    </div>
                    <div>
                        <div className="form-navigation">
                            <FormNavigation
                                step={props.step} 
                                back={props.back}
                                next={props.next}
                            />
                        </div>
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