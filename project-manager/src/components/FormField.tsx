import { FormFieldControl } from "../types/FormFieldControl";

export default function FormField({
	labelText,
	htmlFor,
	inputType,
	placeholder,
}: FormFieldControl) {
	return (
		<>
			<label htmlFor={htmlFor} className="flex flex-col text-green-600">
				{labelText}
				<input
					type={inputType}
					id={htmlFor}
					placeholder={placeholder}
				/>
			</label>
		</>
	);
}
