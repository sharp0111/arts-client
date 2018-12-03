import React from 'react';
import {connect} from 'react-redux';
import DisplayResults from '../../components/DisplayResults/display-results';
import {fetchSearchResults} from '../../actions/index.actions';
import {fetchCategoryResults} from '../../actions/index.actions';

export class SearchPage extends React.Component{

    componentWillMount(){
        let category = this.getQueryVariable('category')
        let search = this.getQueryVariable('search')
        const categories = ['per', 'mus', 'fin', 'dig', 'cra', 'fab']
        console.log(search)
        if(categories.includes(category)){
            console.log('found')
            this.props.dispatch(fetchCategoryResults(category));
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

        return(
            <div className="container search-page">
                <DisplayResults />
            </div>
        )
    }
}

const mapStatetoProps = state => ({
    resources: state.thumbnails
});
 
export default connect(mapStatetoProps)(SearchPage)