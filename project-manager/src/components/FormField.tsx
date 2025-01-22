import { FormFieldControl } from "../types/FormFieldControl";

export default function FormField({
  labelText,
  htmlFor,
  inputType,
  placeholder,
  className,
  value = "",
  onChange,
}: FormFieldControl) {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className={`flex flex-col text-vinho font-medium text-sm ${className}`}
      >
        {labelText}
        <input
          className="rounded-md border p-2 border-black border-opacity-10 placeholder:font-normal placeholder:text-black placeholder:opacity-50 mt-1"
          type={inputType}
          id={htmlFor}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
}
