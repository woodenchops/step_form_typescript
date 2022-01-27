import React from 'react';
import {SingleFormProps} from '../interfaces/index'

const StepTwo: React.FC<SingleFormProps>  = ({handleFormData, formData}) => {
  return <div>
    <p>Two</p>
    <input type="text" name='two' value={formData.two} onChange={handleFormData} />
  </div>;
};

export default StepTwo;
