import React from "react";

export type CheckboxType = {
  id: string;
  isChecked: boolean;
  className?: string;
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Checkbox({ id, isChecked, className, onchange }: CheckboxType): JSX.Element {
  const checkboxClassName = `${className} h-5 w-5 text-blue-500  focus:ring-blue-400 border-gray-300 rounded-sm`;

  return (
    <input
      type="checkbox"
      className={checkboxClassName}
      id={id}
      checked={isChecked}
      onChange={onchange}
    />
  );
}

export default Checkbox;
