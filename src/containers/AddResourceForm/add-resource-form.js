import React from 'react';
import PropTypes from 'prop-types';
import BasicSection from './basic-section';
import DescriptionSection from './description-section';
import PriceSection from './price-section';

class AddResourceForm extends React.Component{
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.state = {
          page: 1,
        };
      }
      nextPage() {
        this.setState({ page: this.state.page + 1 });
      }
    
      previousPage() {
        this.setState({ page: this.state.page - 1 });
      }

    render(){
        console.log(this.props.step)
        const {onSubmit} = this.props;
        const {page} = this.state;
        return(
            <div>
                {this.props.index === 0 && <BasicSection onSubmit={this.props.next} />}
                {this.props.index === 1 && <DescriptionSection 
                    previousPage={this.props.back}
                    onSubmit={this.props.next} />
                }
                {this.props.index === 2 && <PriceSection 
                    previousPage={this.props.back}
                    onSubmit={this.props.next} />
                }
            </div>
        )
    }
}

AddResourceForm.propsType = {
    onSubmit: PropTypes.func.isRequired,
};

export default AddResourceForm;