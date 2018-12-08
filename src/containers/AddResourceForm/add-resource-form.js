import React from 'react';
import PropTypes from 'prop-types';
import BasicSection from './basic-section';
import DescriptionSection from './description-section';
import PriceSection from './price-section';
import AvailabilitySection from './availability-section';
import ImageSection from './image-section';
import LocationSection from './location-section';
import {reduxForm} from 'redux-form';

import {createResource} from '../../actions/index.actions';

class AddResourceForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          page: 1,
        };
      }

    handleSubmit = (values) => {
        const {availabilty, name,
            additional, city, category_type, state, street, unit, rate, description
        } = values;

        const category = [] 
        category_type.category.map(item => {
            category.push(item.value)
            return null;
        })
        let images = this.props.images? this.props.images : null
        let type = category_type.type.value
        let value = parseFloat(rate, 10)*1000
        let data = {
            category: category,
            price_value: value,
            price_unit: unit,
            price_additional: additional,
            calendar: availabilty,
            description: description,
            type: type,
            name: name,
            images: images,
            street: street,
            city: city,
            state: state,
        }
        console.log(data)
        return this.props.dispatch(createResource(data))
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

export default reduxForm({form: 'add-resource-form'})(AddResourceForm);