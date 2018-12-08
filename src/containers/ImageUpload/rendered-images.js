import React from 'react'
import {Image} from 'cloudinary-react';


export default class RenderedImages extends React.Component{
    render(){
        console.log(this.props.images)
        if(this.props.images.length > 0){
            console.log(this.props.images[0].public_id);

        let newImages = this.props.images.map((image, i) => 
            <div key={i} className='uploaded-image'>
                <Image 
                    cloudName='arts-connective'
                    publicId={image.public_id}
                    width='300'
                    height='200'
                />
            </div>
        )
        return(
            <div>
                <p>New Images</p>
                {newImages}
            </div>
        )
        }
        return null;
    }
}    