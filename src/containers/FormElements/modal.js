import React from 'react';
const enhanceWithClickOutside = require('react-click-outside');

class Modal extends React.Component{
    
    handleclickOutside = () => {
        console.log('toggle')
    }

    render(){
        return(
            <div className='modal'>
            </div>
        )
    }

}

export default enhanceWithClickOutside(Modal);