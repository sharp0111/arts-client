import React from 'react';
import Review from '../../components/Display/review';

export default class ReviewsWrapper extends React.Component{
    render(){
        let reviews = this.props.reviews.map((item, index) => 
            <Review 
                key={index}
                author={item.author}
                text={item.review}
            />
        )
        return(
            <div className='review-section'>
                <h3>Reviews</h3>
                {reviews}
            </div>
        )
    }
}