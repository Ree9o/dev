import React from "react";

export type InputType = {
  value: string;
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
};

function Input({ value, onchange, placeholder, className }: InputType): JSX.Element {
  const defaultClasses =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
  const combinedClasses = `${defaultClasses} ${className}`;

  return (
    <input
      type="text"
      className={combinedClasses}
      value={value}
      onChange={onchange}
      placeholder={placeholder}
    />
  );
}

export default Input;
