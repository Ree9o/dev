// src/Button.tsx
import React, { ReactNode, MouseEventHandler } from "react";

export type ButtonType = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

function Button({ children, onClick, className }: ButtonType): JSX.Element {
  const defaultClass =
    "w-20 h-10 border border-white text-white rounded-md bg-cyan-500 shadow hover:cursor-pointer hover:opacity-80 hover:translate-y-px";
  const combinedClasses = `${defaultClass} ${className}`;

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}

export default Button;
