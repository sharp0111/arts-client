import React from 'react';
import Media from 'react-media';
import HelpPanel from '../../components/HelpPanel/help-panel';
import HelpPanelOverlay from '../../components/HelpPanel/help-panel-overlay';
import './help-panel-wrapper.css';

const helpText = {
    basic: 'Name, select multiple categories, and type',
    description: 'Give a more detailed description',
    location: 'Where is it located? Exact location not availalbe until after confirmation',
    images: 'Upload images, must be a 4X3 ratio',
    price: 'Give a rate per unit, such as $50/hr, which will be displayed in search results',

}

export default class HelpPanelWrapper extends React.Component{
    render(){

        let text = helpText[this.props.step];
        let title = this.props.step

        return(
            <div className="help-panel-wrapper">
                <Media query='(max-width: 765px)'>
                    {matches => 
                        matches? (<HelpPanelOverlay text={text} title={title}/>) : (
                            <HelpPanel text={text}/>
                        )}
                </Media>
            </div>
        )
    }
}