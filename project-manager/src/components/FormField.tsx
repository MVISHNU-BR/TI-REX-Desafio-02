import { FormFieldControl } from "../types/FormFieldControl";

export default function FormField({
	labelText,
	htmlFor,
	inputType,
	placeholder,
	className
}: FormFieldControl) {
	return (
		<>
			<label htmlFor={htmlFor} className={`flex flex-col text-vinho font-medium font-sm ${className}`}>
				{labelText}
				<input
					className="rounded-md border p-2 border-slate-200 placeholder:font-normal mt-1"
					type={inputType}
					id={htmlFor}
					placeholder={placeholder}
				/>
			</label>
		</>
	);
}
