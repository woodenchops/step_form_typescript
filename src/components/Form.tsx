import React, {memo, useState} from 'react';
import { FormProps, FormDataType } from '../interfaces/index';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepTwo from './StepTwo';

const component = {
  stepOne: StepOne,
  stepTwo: StepTwo,
  stepThree: StepThree
}

const Form: React.FC<FormProps> = ({step}) => {

  const [formData, setFormData] = useState<FormDataType>({
    one: '',
    two: '',
    three: ''
  })

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }

  const Component = component[step];
  return <Component handleFormData={handleFormData} formData={formData} />
};

export default memo(Form);
