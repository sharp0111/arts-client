import React from 'react';
import Input from '../FormElements/input';
import {Field, reduxForm} from 'redux-form';
import ImageUploadWrapper from '../ImageUpload/image-upload-wrapper';
import {required, nonEmpty} from '../../validators';


const ImageSection = props => {
    const {handleSubmit, previousPage} = props;
    return (
        <form onSubmit={handleSubmit}>
            <ImageUploadWrapper />
            <div className='row form-navigation-buttons'>
                <button type='button' className='form-back' onClick={previousPage}>
                    Back
                </button>
                <button type='submit' className='form-next'>
                    Next
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'add-resource-form',
    destroyOnUnmount: false, 
    forceUnregisterOnUnmount: true, 
  })(ImageSection);