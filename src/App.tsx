import React, {useRef, useState} from 'react';
import './App.css';
import Form from './components/Form';
import { StepTypes, ErrorsTypes, FormDataType } from './interfaces/index';

const {stepOne, stepTwo, stepThree} = StepTypes;

const step = [
  stepOne,
  stepTwo,
  stepThree
];

function App() {

  const [stepCount, setStepCount] = useState<number>(0);
  const [formErrors, setFormErrors] = useState<ErrorsTypes[]>([]);
  const formErrorsRef = useRef(formErrors);

  const [formData, setFormData] = useState<FormDataType>({
    one: '',
    two: '',
    three: ''
  })

  const lastStep = stepCount === step.length - 1;
  const disablePrevButton = stepCount === 0;
  const nextButtonText = lastStep ? 'Submit' : "Next"

  const handleOnError = (x: string) => {
    setFormErrors((prevState) => {
      return [
        ...prevState,
        x
      ]
    })
  }

  const handleRemoveError = (x: string) => {
    setFormErrors((prevState) => {
      return prevState.filter(err => err !== x);
    })
  }

const isEmpty = (object: FormDataType) => {

   const formattedObj = Object.entries(object);
    for (const property of formattedObj) {
       if( property[1] === '') {
        if(!formErrorsRef.current.includes(property[0])) {
          handleOnError(property[0]);
          formErrorsRef.current = [...formErrorsRef.current, property[0]]
        }
       } else {
        handleRemoveError(property[0]);
        formErrorsRef.current = formErrorsRef.current.filter(err => err !== property[0]);
       }
    }
    return true
  }



  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement> ) => {
    e.preventDefault();

    isEmpty(formData);

    if(formErrorsRef.current.length > 0) {
      alert('Not filled out')
      return;
    }

    alert('submitted');

  }




  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleFormNextStep = (e: React.FormEvent<HTMLButtonElement>) => {
    if(lastStep) {
      onSubmitHandler(e);
      return;
    }

    setStepCount(prevState => prevState + 1)
  }

  const handleFormPrevStep = () => {
    setStepCount(prevState => prevState - 1)
  }


  return (
    <div className="App">
      <Form step={step[stepCount]} onSubmitHandler={onSubmitHandler} formData={formData} handleFormData={handleFormData}/>
      <button disabled={disablePrevButton} onClick={handleFormPrevStep}>Prev</button>
      <button onClick={handleFormNextStep}>{nextButtonText}</button>
    </div>
  );
}

export default App;
