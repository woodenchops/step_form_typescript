import React from 'react';
import {SingleFormProps} from '../interfaces/index'

const StepThree: React.FC<SingleFormProps>  = ({handleFormData, formData}) => {
  return <div>
    <p>Three</p>
    <input type="text" name='three' value={formData.three} onChange={handleFormData} />
  </div>;
};

export default StepThree;
