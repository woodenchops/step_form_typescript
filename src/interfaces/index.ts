export enum StepTypes {
  stepOne = 'stepOne',
  stepTwo = 'stepTwo',
  stepThree = 'stepThree'
}

export interface FormDataType {
  one: string;
  two: string;
  three: string;
}

export interface FormProps {
  step: StepTypes;
}

export interface SingleFormProps {
  handleFormData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: FormDataType;
}
