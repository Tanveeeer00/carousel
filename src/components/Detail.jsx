import React from "react";

export default function Detail({ children, className }) {
  return (
    <div
      className={` border-solid border-[2px] h-[12rem] w-full rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
}
