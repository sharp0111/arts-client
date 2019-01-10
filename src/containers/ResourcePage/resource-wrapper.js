import React from 'react';
import {connect} from 'react-redux';

import DisplayResource from '../../components/DisplayResource/display-resource';

const reviews = [
    {
        author: 'Wambui Behrend',
        rating: 3,
        review: 'Nisi quis eleifend quam adipiscing. Purus in mollis nunc sed id semper risus. Viverra ipsum nunc aliquet bibendum. Risus feugiat in ante metus dictum at tempor. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Et netus et malesuada fames. '
    },
    {
        author: 'Agape Jollenbeck',
        rating: 5,
        review: 'Iaculis nunc sed augue lacus viverra vitae. Tellus rutrum tellus pellentesque eu tincidunt. Lectus nulla at volutpat diam ut venenatis tellus in. Varius sit amet mattis vulputate enim. Sollicitudin aliquam ultrices sagittis orci a.'
    },
    {
        author: 'Isabella Richter',
        rating: 4,
        review: 'Ut venenatis tellus in metus vulputate. '
    },
    {
        author: 'Riannon Van Can',
        rating: 5,
        review: 'Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Habitant morbi tristique senectus et. Varius duis at consectetur lorem donec massa sapien faucibus et. Cursus risus at ultrices mi. Feugiat in fermentum posuere urna nec tincidunt praesent. Dictum sit amet justo donec enim. Velit dignissim sodales ut eu sem integer vitae justo. Posuere sollicitudin aliquam ultrices sagittis. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Sed odio morbi quis commodo.'
    },
    {
        author: 'Sunil Kovač',
        rating: 2,
        review: 'Magna ac placerat vestibulum lectus mauris ultrices eros in. Augue mauris augue neque gravida in. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor.'
    },
    {
        author: 'Rahul Herczog',
        rating: 5,
        review: 'd velit ut tortor pretium viverra suspendisse potenti. In mollis nunc sed id semper. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Nisl nisi scelerisque eu ultrices. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Lectus magna fringilla urna porttitor rhoncus dolor purus non.'
    },
]

export class ResourceWrapper extends React.Component{
    
    filteredReviews = []
    componentDidMount(){
        let numOfReviews = Math.ceil(Math.random()*5)
        console.log(numOfReviews)
        for (let i = 0; i<numOfReviews; i++){
            let reviewNumber = Math.floor(Math.random()*numOfReviews)
            this.filteredReviews.push(reviews[reviewNumber])            
        }
        console.log(this.filteredReviews)
    }

    render(){
        if(this.props.loaded){
            return(
                <div>
                    <DisplayResource 
                        name={this.props.resource.name}
                        value={(this.props.resource.price_value/1000).toFixed([2])}
                        unit={this.props.resource.price_unit}
                        additional={this.props.resource.price_additional}
                        calendar={this.props.resource.calendar}
                        description={this.props.resource.description}
                        type={this.props.resource.type}
                        category={this.props.resource.category.length > 0? this.props.resource.category: null}
                        street={this.props.resource.street}
                        city={this.props.resource.city}
                        state={this.props.resource.state}
                        images={this.props.resource.images.length > 0? this.props.resource.images : null}
                        reviews={this.filteredReviews}
                    />
                </div>
            )
        }
        return null;
    }
}

const mapStateToProps = state => ({
    loaded: state.resources.selection._id !==undefined,
    resource: state.resources.selection
})

export default connect(mapStateToProps)(ResourceWrapper)