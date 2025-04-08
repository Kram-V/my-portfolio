import React, { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  size?: string;
}

const Tag: React.FC<TagProps> = ({ children, size = "lg" }) => {
  const tagSize =
    size === "lg" ? "px-3 py-2" : size === "md" ? "px-2 py-1 text-[13px]" : "";

  return (
    <span className={`${tagSize} border-[1px] px-3 py-2 rounded-full`}>
      {children}
    </span>
  );
};

export default Tag;
