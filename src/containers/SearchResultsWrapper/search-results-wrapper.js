import React from 'react';
import {connect} from 'react-redux';

import DisplayResults from '../../components/DisplayResults/display-results';
import ResourceThumbnail from '../../components/DisplayResults/resource-thumbnail';
import FilterResults from '../FilterResults/filter-results';
export class SearchResultsWrapper extends React.Component{
  
    render(){
        if(this.props.resources){
            let thumbnails = this.props.resources.map(item =>
                    <ResourceThumbnail
                        imageUrl={(item.images.length > 0) ? item.images[0]: null}
                        key={item._id}
                        name={item.name}
                        value={(item.price_value/1000).toFixed([2])}
                        unit={item.price_unit}
                        id={item._id}
                    />
                )
            return(
                <div className='container display-results'>
                    <div className='row'>
                        <div className='results-filter-section col-md-3'>
                            <FilterResults />
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