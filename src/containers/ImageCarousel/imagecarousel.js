import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Image} from 'cloudinary-react';

export default class ImageCarousel extends React.Component{
    render(){
        console.log(this.props.images)
        let slides = this.props.images.map((image, index) => 
            <div key={index}>
                <Image cloudName='arts-connective' publicId={image} height='500' width='650' crop='fill'/>
            </div>
        )
        return(
            <div className='contain-carousel'>
                <Carousel autoPlay showThumbs={false}>
                    {slides}
                </Carousel>
            </div>
        )
    }
}