import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { LuTrophy } from "react-icons/lu";
import { SlQuestion } from "react-icons/sl";
import { GiBackwardTime } from "react-icons/gi";

export default function Navbar() {
  return (
    <div className="grid grid-cols-3 mx-2 w-full sticky">
      <div className="flex items-center bg-white rounded-full w-[16rem] pr-3 h-10">
        <Image
          src="/BNB.svg"
          alt="test"
          height={80}
          width={70}
          className="bg-yellow-300 rounded-full"
        />
        <p className="font-bold text-lg text-purple-700 mx-3">BNBUSD</p>
        <p className="font-bold text-sm text-purple-700">$228.5332</p>
      </div>
      <div className="flex justify-center">
        <div className="flex items-center justify-between px-3 rounded-full w-[7rem] bg-white">
          <p>
            <FaArrowLeft className="text-teal-400" />
          </p>
          <p>
            <FaArrowRight className="text-teal-400" />
          </p>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <p className="bg-white text-purple-700 font-bold text-xl px-2 rounded-full w-[7rem] h-10 flex items-center">
          00:38
          <span className="text-purple-700 text-sm ml-3">5m</span>
        </p>
        <span className="bg-violet-700/85 w-11 h-11 flex justify-center items-center rounded-lg">
          <SlQuestion className="text-white w-5 h-5" />
        </span>
        <span className="bg-violet-700/85 w-11 h-11 flex justify-center items-center rounded-lg">
          <LuTrophy className="text-white w-4 h-4" />
        </span>
        <span className="bg-gray-200 border border-white w-11 h-11 flex justify-center items-center rounded-lg">
          <GiBackwardTime className="text-white w-6 h-6" />
        </span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
