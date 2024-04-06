import React from "react";
import Card from "./BaseCard";
import Header from "./Header";
import Detail from "./Detail";
import data from "../lib/data.json";
import { TiCancel } from "react-icons/ti";
import { IoMdArrowDown } from "react-icons/io";

export default function ExpiredCard() {
  const ExpiredData = data.Expired;
  return (
    <div className="flex gap-5">
      {ExpiredData.map((index) => (
        <Card key={index.id} className="opacity-90">
          <Header
            text="Expired"
            num={index.hash}
            className="text-gray-400"
            Bg="bg-gray-200 rounded-t-2xl"
          >
            <TiCancel className="text-gray-400 text-3xl" />
          </Header>

          <div className="p-4">
            <svg
              viewBox="0 0 240 65"
              color="#cbd5e1"
              fill="#e5e7eb"
              xmlns="http://www.w3.org/2000/svg"
              className="sc-grXZZQ ktVOoD relative"
            >
              <path
                d="M10.0001 49.2757L10.0003 64H234L234 49.2753C234 42.5136 229.749 36.4819 223.381 34.2077L138.48 3.8859C127.823 0.0796983 116.177 0.0796931 105.519 3.8859L20.6188 34.2076C14.2508 36.4819 10.0001 42.5138 10.0001 49.2757Z"
                fill="var(--colors-tertiary)"
              ></path>
              <text
                x="105"
                y="28"
                font-size="20"
                fill="#6ee7b7"
                className="font-bold"
              >
                UP
              </text>
              <text
                x="85"
                y="50"
                font-size="12"
                fill="#4c1d95"
                className="font-bold"
              >
                {index.up} Payout
              </text>
            </svg>

            <div className="flex justify-center">
              <Detail className="border-pink-500 p-4">
                <h1 className="font-bold text-md">CLOSED PRICE</h1>
                <div className="flex justify-between mt-4">
                  <p className="font-extrabold text-[1.5rem] text-pink-500">
                    {index.price}
                  </p>

                  <p className="bg-pink-500 rounded-md p-1 text-xl flex justify-center items-center gap-1 text-white ml-10 w-auto h-[2rem]">
                    <IoMdArrowDown />${index.statusAmount}
                  </p>
                </div>
                <div className="flex justify-between mt-5">
                  <p className="text-lg font-semibold">Locked Price:</p>
                  <p className="font-semibold text-lg">{index.locked}</p>
                </div>
                <div className="flex justify-between mt-1">
                  <p className="font-extrabold text-xl">Prize Pool:</p>
                  <p className="font-extrabold text-xl">{index.pool}</p>
                </div>
              </Detail>
            </div>

            <svg
              viewBox="0 0 240 65"
              color="text"
              fill="#ec4899"
              xmlns="http://www.w3.org/2000/svg"
              class="sc-grXZZQ ktVOoD"
            >
              <path
                d="M10.0001 15.7243L10.0003 1H234L234 15.7247C234 22.4864 229.749 28.5181 223.381 30.7923L138.48 61.1141C127.823 64.9203 116.177 64.9203 105.519 61.1141L20.6188 30.7924C14.2508 28.5181 10.0001 22.4862 10.0001 15.7243Z"
                fill="var(--colors-failure)"
              ></path>
              <text
                x="82"
                y="20"
                font-size="12"
                fill="#fff"
                className="font-bold"
              >
                {index.down} Payout
              </text>
              <text
                x="92"
                y="40"
                font-size="20"
                fill="#fff"
                className="font-bold"
              >
                Down
              </text>
            </svg>
          </div>
        </Card>
      ))}
    </div>
  );
}