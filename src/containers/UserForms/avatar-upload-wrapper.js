import React from 'react';
import Button from '../FormElements/button';
import Avatar from './avatar';

export default class AvatarUploadWrapper extends React.Component{
    constructor(){
        super()
        this.state = {
            uploading: false,
            image: null,
        }
        this.uploadWidget = this.uploadWidget.bind(this);
    }

    uploadWidget(){
        let _this = this;
        let imageData;
        window.cloudinary.openUploadWidget(
            {    
                cloud_name: "arts-connective",    
                upload_preset: "wabn9lxh",    
                sources: ["local", "camera", "url"],
                maxImageWidth: 600,
                maxImageHeight: 600,
                showAdvancedOptions: true,    
                cropping: true,
                croppingAspectRatio: 1.0,    
                multiple: false,    
                defaultSource: "local",    
                styles: {        
                    palette: {            
                        window: "#FFFFFF",            
                        windowBorder: "#90A0B3",            
                        tabIcon: "#4190CE",            
                        menuIcons: "#5A616A",            
                        textDark: "#000000",            
                        textLight: "#FFFFFF",            
                        link: "#4190CE",            
                        action: "#FCBA4A",            
                        inactiveTabIcon: "#141D1F",            
                        error: "#EF694D",            
                        inProgress: "#4190CE",            
                        complete: "#85D66B",            
                        sourceBg: "#E3EBED"        
                    },        
                    fonts: {            
                        default: null,            
                        "'Fira Sans', sans-serif": {
                                url: "https://fonts.googleapis.com/css?family=Fira+Sans",
                                active: true}
                            }
                    }
                },
            function(error, result){
                if(error){console.log(error)}
                if(result){
                    console.log(result)
                    _this.props.handleImage(result[0].public_id);
                }

            })    
    }


    render(){
        let content = this.props.image ?
            <Avatar image={this.props.image}/> :
            <div>
                <Button onClick={this.uploadWidget} label='Choose profile image' type='button'/>
            </div>
        return(
            <div>
                {content}
            </div>
        )
    }

}