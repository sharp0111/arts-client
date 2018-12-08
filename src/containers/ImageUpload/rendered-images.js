import React from 'react'
import {Image, CloudinaryContext} from 'cloudinary-react';


export default class RenderedImages extends React.Component{
    render(){
        console.log(this.props.images)
        if(this.props.images.length > 0){
            console.log(this.props.images[0].public_id);

        let newImages = this.props.images.map((image, i) => 
            <div key={i} className='uploaded-image'>
                <Image 
                    publicId={image.public_id}
                    width='200'
                    height='160'
                    crop='fill'
                />
            </div>
        )
        return(
            <CloudinaryContext cloudName='arts-connective'>
                <p>New Images</p>
                {newImages}
            </CloudinaryContext>
        )
        }
        return null;
    }
}    