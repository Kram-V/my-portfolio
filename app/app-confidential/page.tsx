import Link from "next/link";
import React from "react";

const AppConfidential = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <h2 className="text-4xl font-semibold">
        Oooopppsss! This app is confidential!
      </h2>

      <Link
        href="/"
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Back to Home Page
      </Link>
    </div>
  );
};

export default AppConfidential;
