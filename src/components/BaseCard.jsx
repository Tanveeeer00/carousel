import React from "react";

export default function BaseCard({ children, className }) {
  return (
    <div
      className={`border bg-white rounded-2xl shadow-lg h-auto w-auto ${className}`}
    >
      {children}
    </div>
  );
}
