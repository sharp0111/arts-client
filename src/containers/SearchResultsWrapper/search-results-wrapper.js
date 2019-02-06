import React from 'react';
import {connect} from 'react-redux';

import DisplayResults from '../../components/DisplayResults/display-results';
import ResourceThumbnail from '../../components/DisplayResults/resource-thumbnail';
import FilterResults from '../FilterResults/filter-results';
import { FETCH_RESOURCE_SUCCESS } from '../../actions/index.actions';
export class SearchResultsWrapper extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            category: null,
            type: null,
        }
    }

    handleCategory = (input) => {
        console.log(input.value)
        this.setState({
            category: input.value
        })
    }

    handleType = (input) => {
        console.log(input.value)
        this.setState({
            type: input.value
        })
    }

    filterResources = (resources) => {
        console.log(resources)
        const filteredResources = [];
        resources.forEach(resource => {
            console.log(resource.category)
            if(resource.category.includes(this.state.category) && resource.type.includes(this.state.type)){
                console.log(true)
                filteredResources.push(resource)
                console.log(filteredResources);
            }
            else if(resource.category.includes(this.state.category) && this.state.type===null){
                filteredResources.push(resource)
            }
            else if(resource.type.includes(this.state.type) && this.state.category===null){
                filteredResources.push(resource)
            }
        });
        return (filteredResources.length>0?filteredResources:resources)
    }

    clearFilters = () => {
        this.setState({
            category: null,
            type: null,
        })
    }
    
    render(){
        if(this.props.resources){
            let allResources = this.props.resources
            let filteredResources = this.filterResources(allResources)
            console.log(filteredResources);
            let thumbnails = filteredResources.map(item =>
                <ResourceThumbnail
                    imageUrl={(item.images.length > 0) ? item.images[0]: null}
                    key={item._id}
                    name={item.name}
                    value={(item.price_value/1000).toFixed([2])}
                    unit={item.price_unit}
                    id={item._id}
                    category={item.category}
                    verified={item.verified}
                />
                )
            thumbnails=thumbnails.reverse();
            return(
                <div className='container display-results'>
                    <div className='row'>
                        <div className='results-filter-section col-md-3'>
                            <FilterResults 
                                handleCategory={this.handleCategory}
                                handleType={this.handleType}
                                multi={false}
                                onClick={this.clearFilters}
                            />
                        </div>
                        <DisplayResults thumbnails={thumbnails}/>
                    </div>
                </div>
            )
        }
        if(this.props.resources === 'null'){
            console.log('state not updated')
        }
        return null;
    }
}

const mapStateToProps = state => ({
    resources: state.resources.thumbnails
})

export default connect(mapStateToProps)(SearchResultsWrapper)