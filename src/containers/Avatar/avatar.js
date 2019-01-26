import React from 'react';
import {Image, CloudinaryContext} from 'cloudinary-react';

export default class Avatar extends React.Component{
    render(){
        console.log(this.props.image)


    let avatarImage = this.props.image? 
        <div className='avatar'>
            <Image
                publicId={this.props.image}
                width={this.props.width}
                height={this.props.height}
                gravity='faces'
                crop='fill'
            />
        </div>: null
        
        return(
            <CloudinaryContext cloudName='arts-connective'>
                {avatarImage}
            </CloudinaryContext>
        )
    }
}