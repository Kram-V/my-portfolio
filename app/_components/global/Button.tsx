"use client";

import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  btnWidth?: string;
  btnSize?: string;
  link?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  btnWidth,
  btnSize = "lg",
  link,
  onClick,
  disabled = false,
}) => {
  const [mounted, setMounted] = useState<boolean>(false);

  const buttonSize =
    btnSize === "lg"
      ? "px-6"
      : btnSize === "md"
      ? "px-4 text-[14px]"
      : btnSize === "sm"
      ? "px-2 text-[12px]"
      : "";

  const baseClass = `${buttonSize} border-2 py-2 bg-blue-600 border-transparent text-white font-semibold rounded-full hover:bg-transparent hover:border-blue-600 hover:text-blue-600 transition duration-300  ${className} ${btnWidth} ${
    disabled ? "cursor-not-allowed" : "cursor-pointer"
  }`;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (!link && onClick)
    return (
      <button onClick={onClick} className={baseClass}>
        {children}
      </button>
    );

  if (link)
    return (
      <Link href={link!} className={baseClass} target="_blank">
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} type="submit" className={baseClass}>
      {children}
    </button>
  );
};

export default Button;
