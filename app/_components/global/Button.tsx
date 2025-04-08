import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  btnWidth?: string;
  btnSize?: string;
  link?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  btnWidth,
  btnSize = "lg",
  link,
}) => {
  const buttonSize =
    btnSize === "lg"
      ? "px-6"
      : btnSize === "md"
      ? "px-4 text-[14px]"
      : btnSize === "sm"
      ? "px-2 text-[12px]"
      : "";

  const baseClass = `${buttonSize} border-2 py-2 bg-blue-600 border-transparent text-white font-semibold rounded-full hover:bg-transparent hover:border-blue-600 hover:text-blue-600 transition duration-300 cursor-pointer ${className} ${btnWidth}`;

  return (
    <>
      {!link ? (
        <button className={baseClass}>{children}</button>
      ) : (
        <Link href={link!} className={baseClass} target="_blank">
          {children}
        </Link>
      )}
    </>
  );
};

export default Button;
