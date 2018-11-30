import React from 'react';
import Select from 'react-select';

export default function MultiSelect(props){
    return(
        <Select
            isMulti={true}
            name="categories"
            options={props.options}
            className='basic-multi-select'
            onChange={(value) => props.input.onChange(value)}
            onBlur={() => props.input.onBlur(props.input.value)}
        />
    )
}