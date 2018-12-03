import React from 'react';
import {Link} from 'react-router-dom';

export default class ColorListItem extends React.Component{
    render(){
        const color = this.props.color
        return(
                <li className='color-wheel-list-item'
                    id={color}
                    onMouseEnter={this.props.listHover}
                    onMouseLeave={this.props.listLeave}
                >
                    <div 
                        className={`digital-art-link icon-${this.props.color}`} 
                        id={color}
                        onMouseEnter={this.props.listHover}
                        onMouseLeave={this.props.listLeave}
                    >
                    </div>
                    <Link 
                        to={`/search/category/?category=${this.props.category}`}>{this.props.name}
                    </Link>
                </li>
            )
    }
}