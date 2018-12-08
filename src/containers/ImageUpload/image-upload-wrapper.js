import React from 'react';
import RenderedImages from './rendered-images';
import Button from '../FormElements/button';
import {connect} from 'react-redux';
import {handleUploadedImage} from '../../actions/index.actions';

export class ImageUploadWrapper extends React.Component{
    constructor(){
        super()
        this.state = {
            uploading: false,
            images: []
        }
        this.uploadWidget = this.uploadWidget.bind(this);
        this.handleImage = this.handleImage.bind(this);
    }

    uploadWidget() {
        let _this = this;
        const imageData = [];
            window.cloudinary.openUploadWidget(
            {    
                cloud_name: "arts-connective",    
                upload_preset: "wabn9lxh",    
                sources: ["local", "camera", "url"],
                googleApiKey: "<image_search_google_api_key>",
                showAdvancedOptions: true,    
                cropping: false,    
                multiple: true,    
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
            function(error, result) {
                if(error){console.log(error)}
                if(result){
                    console.log(result)
                    for(let i=0; i<result.length; i++){
                        imageData.push({
                            public_id: result[i].public_id,
                            url: result[i].url
                        })
                    }
                    console.log(imageData)             
                _this.props.dispatch(handleUploadedImage(imageData))
                }
            })
    }

     handleImage(data){
        this.uploadWidget()
            .then((data) => this.props.dispatch(handleUploadedImage(data)))
    }
  
    render(){

        return(
            <div>
                <div className='buttons'>
                    <Button onClick={this.uploadWidget} label='Add Image' type='button'/>
                </div>
                <div className='image-gallery'>
                    <RenderedImages images={this.props.images} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    images: state.resources.images
})

export default connect(mapStateToProps)(ImageUploadWrapper)