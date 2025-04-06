import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  btnWidth?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  btnWidth = "w-full",
}) => {
  return (
    <button
      className={`px-6 py-2 border-2 bg-blue-600 border-transparent text-white font-semibold rounded-full hover:bg-transparent hover:border-blue-600 hover:text-blue-600 transition duration-300 cursor-pointer ${className} ${btnWidth}`}
    >
      {children}
    </button>
  );
};

export default Button;
