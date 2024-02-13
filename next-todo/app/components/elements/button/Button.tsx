// src/Button.tsx
import React, { ReactNode, MouseEventHandler } from "react";

export type ButtonType = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: "submit" | "button";
};

function Button({ children, onClick, className, type }: ButtonType): JSX.Element {
  const defaultStyles =
    "w-20 h-10 border border-white text-white rounded-md bg-cyan-500 shadow hover:cursor-pointer hover:opacity-80 hover:translate-y-px";
  const combinedStyles = `${defaultStyles} ${className}`;

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}

export default Button;
