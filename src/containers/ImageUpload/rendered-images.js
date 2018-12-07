import React from 'react'

export default props => 
    props.images.map((image, i) => 
        <div key={i} className='uploaded-image'>
            <div onClick={() => props.removeImage(image.public.id)}
            className='delete'>
                <p>X</p>
            </div>
            <image src={image.secure_url} alt='' />
        </div>
    )