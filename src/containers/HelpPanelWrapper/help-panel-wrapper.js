import React from 'react';
import HelpPanel from '../../components/HelpPanel/help-panel';

const helpText = {
    basic: "Plurality transgressive observe patriarchy digital popular culture intersects universal represents. Sexual identity Marx performative act tension existence media reposition found object. Gentrification personal observation transgress boundaries boundaries psychedelic materialism installation anti-hero ethnography.",
    description: "Institutional pastiche gaze violence racial identity exploration political postmodern collective. New technologies performative Saatchi reclaiming cross-cultural surface evocative.",
    location: "Street art subculture internet immaterial natural world vulnerable homogenized love hyperspace. Artifacts discord tension zine personal experience performance haunted profound body art. Natural Duchamp consumer politics cabinet of curiousities paradigm shift transcend multimedia erotica social justice.",
    images: "Sexual identity real consumer politics conformity social justice sacred dialogue. Audience participation nothingness disenchantment Guerilla Girls expressive alternative viewpoint meta.",
    summary: "Societal memory marginalized observers dogma pop art narrative. Gender martyr resist appropriate materiality artist's atudio meaning seeing. Represents form profound culture jamming material poetic navigate construct. Traditional model pop art non-conformist absurd transgress boundaries racial politics.",
}

export default class HelpPanelWrapper extends React.Component{
    render(){

        let text;
        switch(this.props.step){
            case 'basic':
                text = helpText.basic;
                break;
            case 'description':
                text = helpText.description;
                break;
            case 'location':
                text = helpText.location;
                break;
            case 'images':
                text = helpText.images;
                break;
            case 'summary':
                text = helpText.summary;
                break;
            default:
                text = 'something went wront'
                break;
        }

        return(
            <div className="help-panel">
                <HelpPanel 
                    text={text}
                />
            </div>
        )
    }
}