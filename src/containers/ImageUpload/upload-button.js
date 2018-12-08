import React from 'react';
import Button from '../FormElements/button';

export default class extends React.Component{


    render(){
        return (
            <div className="main">
                <h1>Galleria</h1>
                <div className="upload">
                    <button onClick={this.props.onClick} className="upload-button">
                        Add Image
                    </button>
                </div>
            </div>

        );
    }
}



