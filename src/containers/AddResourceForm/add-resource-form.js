import React from 'react';
import PropTypes from 'prop-types';
import BasicSection from './basic-section';
import DescriptionSection from './description-section';

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
                {page === 1 && <BasicSection onSubmit={this.nextPage} />}
                {page === 2 && <DescriptionSection 
                    previousPage={this.previousPage}
                    onSubmit={this.nextPage} />
                }
            </div>
        )
    }
}

AddResourceForm.propsType = {
    onSubmit: PropTypes.func.isRequired,
};

export default AddResourceForm;