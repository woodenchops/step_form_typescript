import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import { StepTypes } from './interfaces/index';

const {stepOne, stepTwo, stepThree} = StepTypes;

const step = [
  stepOne,
  stepTwo,
  stepThree
];

function App() {

  const [stepCount, setStepCount] = useState(0);
  const [formData, setFormData] = useState({
    one: '',
    two: '',
    three: ''
  })

  const lastStep = stepCount === step.length - 1;
  const disablePrevButton = stepCount === 0;
  const nextButtonText = lastStep ? 'Submit' : "Next"

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleFormNextStep = () => {
    if(lastStep) {
      alert('submitted')
      return;
    }
    setStepCount(prevState => prevState + 1)
  }

  const handleFormPrevStep = () => {
    setStepCount(prevState => prevState - 1)
  }


  return (
    <div className="App">
      <Form step={step[stepCount]} formData={formData} handleFormData={handleFormData}/>
      <button disabled={disablePrevButton} onClick={handleFormPrevStep}>Prev</button>
      <button onClick={handleFormNextStep}>{nextButtonText}</button>
    </div>
  );
}

export default App;
