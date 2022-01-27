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
  formData: FormDataType;
  handleFormData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SingleFormProps {
  handleFormData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: FormDataType;
}
