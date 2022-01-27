import React, {memo} from 'react';
import { FormProps } from '../interfaces/index';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepTwo from './StepTwo';

const component = {
  stepOne: StepOne,
  stepTwo: StepTwo,
  stepThree: StepThree
}

const Form: React.FC<FormProps> = ({step, handleFormData, formData}) => {
  const Component = component[step];
  return <Component handleFormData={handleFormData} formData={formData} />
};

export default memo(Form);
