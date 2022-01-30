import React from 'react';
import {SingleFormProps} from '../interfaces/index'


const StepOne: React.FC<SingleFormProps> = ({handleFormData, formData}) => {
  return <div>
    <p>One</p>
    <input type="text" name='one' required value={formData.one} onChange={handleFormData} />
  </div>;
};

export default StepOne;
