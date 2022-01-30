import React, {useState} from 'react';
import { FormProps, FormDataType } from '../interfaces/index';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepTwo from './StepTwo';

const component = {
  stepOne: StepOne,
  stepTwo: StepTwo,
  stepThree: StepThree
}

const Form: React.FC<FormProps> = ({step, onSubmitHandler, formData, handleFormData}) => {

  const Component = component[step];
  return (
    <form onSubmit={onSubmitHandler}>
      <Component handleFormData={handleFormData} formData={formData} />
    </form>
  )

};

export default Form;
