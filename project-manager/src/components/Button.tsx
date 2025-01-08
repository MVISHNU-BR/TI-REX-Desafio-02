import { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button">;

export function Button({ children, ...props }: ButtonProps) {
  return (

    <button
      className="w-60 h-12 border border-white rounded-full text-center flex items-center justify-center bg-transparent text-white hover:border-gray-500 transition-all"
      {...props}
    >
      {children || "Login"}
    </button>

  );
}


