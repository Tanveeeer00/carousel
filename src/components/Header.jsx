import React from "react";

export default function Header({ text, className, num, Bg, children }) {
  return (
    <div className={`flex justify-between items-center px-4 py-1 ${Bg}`}>
      <div className={`flex justify-center items-center gap-1`}>
        <span className={` text-white text-2xl`}>{children}</span>
        <h1 className={`text-xl font-extrabold ${className}`}>{text}</h1>
      </div>
      <h1 className={`text-sm font-bold ${className}`}>{num}</h1>
    </div>
  );
}
