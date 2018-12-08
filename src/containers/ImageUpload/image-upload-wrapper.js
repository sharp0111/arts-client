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
        const imageData = {};
        window.cloudinary.openUploadWidget({ cloud_name: 'arts-connective', upload_preset: 'wabn9lxh', tags:['help']},
            function(error, result) {
                    imageData.public_id = result[0].public_id;
                    imageData.url = result[0].url               
                _this.props.dispatch(handleUploadedImage(imageData))
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
                <div>
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