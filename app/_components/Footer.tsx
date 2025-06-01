"use client";

import React from "react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  if (pathname === "/not-yet-deployed" || pathname === "/app-confidential")
    return;

  return (
    <footer className="bg-black">
      <div className="w-[90%] xl:w-[1050px] 2xl:w-[1250px] mx-auto py-4 text-gray-400 text-[14px]">
        Copyright © Mark Anthony Vivar 2025 All rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
