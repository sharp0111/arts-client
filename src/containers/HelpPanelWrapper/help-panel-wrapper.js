import React from 'react';
import Media from 'react-media';
import HelpPanel from '../../components/HelpPanel/help-panel';
import HelpPanelOverlay from '../../components/HelpPanel/help-panel-overlay';
import './help-panel-wrapper.css';

const helpText = {
    basic: 'Give a short, descriptive name for your listing. You may choose as many categories as it fits into.',
    description: 'Here is your chance to brag a little. Be as descriptive as possible. Why would someone want to rent your space or item?',
    location: 'Only an approximate location will be displayed until after booking',
    images: 'You may upload up to six images. Landscape-orientate images will display better.',
    price: 'Give a rate per unit, such as $50/hr, which will be displayed in search results. You may optionally add additional pricing information, such as the rate for a longer period of time.',
    availability: 'When are the general times this is available on a weekly basis? Example: Monday-Friday from 6am-2pm'

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