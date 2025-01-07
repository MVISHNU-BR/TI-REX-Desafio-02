type InputType = "text" | "email" | "password";

export interface FormFieldControl{
  labelText: string,
  htmlFor: string,
  inputType: InputType,
  placeholder: string,
  className?: string
}