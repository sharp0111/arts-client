import React from 'react';
import {connect} from 'react-redux';
import SearchResultsWrapper from '../SearchResultsWrapper/search-results-wrapper';
import ResourceThumbnail from '../../components/DisplayResults/resource-thumbnail';
import {fetchSearchResults} from '../../actions/index.actions';
import {fetchCategoryResults} from '../../actions/index.actions';

export class SearchPage extends React.Component{

    componentDidMount(){
        let category = this.getQueryVariable('category')
        let search = this.getQueryVariable('search')
        const categories = ['per', 'mus', 'fin', 'dig', 'cra', 'fab']
        console.log(search)
        if(categories.includes(category)){
            console.log('found')
            this.props.dispatch(fetchCategoryResults(category))
        }
        if(category===false && search===false){
            this.props.dispatch(fetchSearchResults())
        }
    }

    getQueryVariable = (variable) => {
        let query = window.location.search.substring(1);
        const querypart = query.split('&');
        for(let i=0; i<querypart.length; i++){;
            let querypair = querypart[i].split('=');
            if (querypair[0] == variable){return querypair[1]}
        }
        return (false);
    }
    render(){
        console.log('render search-page')
        let thumbnails;
        console.log(this.props.resources)
        /*thumbnails = this.props.resources.thumbnails.map(item =>
            <ResourceThumbnail 
                image={item.images}
                name={item.name}
                value={item.value}
                unit={item.unit}
            />
        )*/
        return(
            <div className="container search-page">
                <SearchResultsWrapper thumbnails={thumbnails}/>
            </div>
        )
    }
}

const mapStatetoProps = state => ({
    resources: state.resources.thumbnails
});
 
export default connect(mapStatetoProps)(SearchPage)