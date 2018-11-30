import React from 'react';
import PropTypes from 'prop-types';
import BasicSection from './basic-section';
import DescriptionSection from './description-section';
import PriceSection from './price-section';
import AvailabilitySection from './availability-section';
import ImageSection from './image-section';
import LocationSection from './location-section';

class AddResourceForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          page: 1,
        };
      }

    handleSubmit = (values) => {
        console.log(values);
    }

    render(){
        console.log(this.props.step)
        const {onSubmit} = this.props;
        return(
            <div className='add-resource-form-panel'>
                {this.props.index === 0 && <BasicSection onSubmit={this.props.next} />}
                {this.props.index === 1 && <DescriptionSection 
                    previousPage={this.props.back}
                    onSubmit={this.props.next} />
                }
                {this.props.index === 2 && <PriceSection 
                    previousPage={this.props.back}
                    onSubmit={this.props.next} />
                }
                {this.props.index === 3 && <AvailabilitySection 
                    previousPage={this.props.back}
                    onSubmit={this.props.next} />
                }
                {this.props.index === 4 && <ImageSection 
                    previousPage={this.props.back}
                    onSubmit={this.props.next} />
                }
                {this.props.index === 5 && <LocationSection 
                    previousPage={this.props.back}
                    onSubmit={this.handleSubmit} />
                }
            </div>
        )
    }
}

AddResourceForm.propsType = {
    onSubmit: PropTypes.func.isRequired,
};

export default AddResourceForm;