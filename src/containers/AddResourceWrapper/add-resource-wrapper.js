import React from 'react';
import AddResource from '../../components/AddResource/add-resource';
import {connect} from 'react-redux';

const formSteps = ['basic', 'description', 'price','availability', 'images', 'location']

export class AddResourceWrapper extends React.Component{
    constructor(){
        super()
        this.state = {
            index: 0,
            current:'basic',
        }
    }

    handleNext = () => {
        let index = this.state.index;
        let current;
        if (index >= 0 && index < formSteps.length-1){
            current = formSteps[index+1]
            let newIndex = index+1
            this.setState({
                index: newIndex,
                current: current,
            })
        }
    }

    handleBack = () => {
        let index = this.state.index;
        let current;
        if (index >0 && index < formSteps.length){
            current = formSteps[index-1];
            let newIndex = index-1;
            this.setState({
                index: newIndex,
                current: current,
            })
        }
    }

    render(){
        const images = [];
        if(this.props.images.length > 0){
            this.props.images.map(image =>
                images.push(image.public_id)
            )
        }
        return(
            <div>
                <AddResource 
                    step={this.state.current}
                    back={this.handleBack}
                    next={this.handleNext}
                    index={this.state.index}
                    length={formSteps.length}
                    images={images}
                />
            </div>
        )
    }
}

const mapStatetoProps = state => ({
    images: state.resources.images
})

export default connect(mapStatetoProps)(AddResourceWrapper)