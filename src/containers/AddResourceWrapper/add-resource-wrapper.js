import React from 'react';
import AddResource from '../../components/AddResource/add-resource';
import {connect} from 'react-redux';

const formSteps = ['basic', 'description', 'location', 'images', 'summary']

export class AddResourceWrapper extends React.Component{
    constructor(){
        super()
        this.state = {
            index: 0,
            current:'basic',
        }
    }

    handleNext = () => {
        console.log('handle next clicked');
        let index = this.state.index;
        let current;
        if (index >= 0 && index < formSteps.length-1){
            current = formSteps[index+1]
            let newIndex = index+1
            console.log(newIndex)
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
        return(
            <div>
                <AddResource 
                    step={this.state.current}
                    back={this.handleBack}
                    next={this.handleNext}
                />
            </div>
        )
    }
}

const mapStatetoProps = state => ({

})

export default connect(mapStatetoProps)(AddResourceWrapper)