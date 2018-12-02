import React from 'react';
import ColorListItem from '../../components/Color-Wheel/color-list-item';

const categories = [
    {
        name: 'Performing Arts',
        color: 'red',
        category: 'per'
    },
    {
        name: 'Music',
        color: 'orange',
        category: 'mus'
    },
    {
        name: 'Fine Art',
        color: 'yellow',
        category: 'fin'
    },
    {
        name: 'Digital Arts',
        color: 'green',
        category: 'dig'
    },
    {
        name: 'Crafts',
        color: 'blue',
        category: 'cra'
    },
    {
        name: 'Fabrication',
        color: 'purple',
        category: 'fab',
    },
]

export default class ColorList extends React.Component{
    render(){
        const listItems = categories.map(category => 
            <ColorListItem
                key={category.category} 
                category={category.category}
                name={category.name}
                color={category.color}
                {...this.props}
            />
        )
        return(
            <ul className='color-wheel-list'>
                {listItems}
            </ul>
        )
    }
}