import React from 'react';
import CategorySymbol from './category-symbol';

export default class DisplayCategories extends React.Component{
    render(){
        let categories 
        if(this.props.category !== null){
            categories= this.props.category.map((item, index) => 
                <CategorySymbol category={item} key={index} />
            )
        }
        return(
            <div className='category-display'>
                {categories}
            </div>
        )
    }
}