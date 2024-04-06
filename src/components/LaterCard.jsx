import React from "react";
import Card from "./BaseCard";
import Header from "./Header";
import Detail from "./Detail";
import { RiTimer2Line } from "react-icons/ri";

export default function LaterCard() {
  return (
    <Card>
      <Header
        text="Later"
        num="#218497"
        className="text-purple-700 font-normal text-[0.8rem]"
        Bg="bg-gray-200 rounded-t-2xl"
      >
        <RiTimer2Line className="text-purple-700" />
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
            x="107"
            y="45"
            font-size="20"
            fill="#a1a1aa"
            className="font-bold"
          >
            UP
          </text>
        </svg>

        <div className="flex justify-center">
          <Detail className="border-gray-300 shadow-xl p-4 w-[19rem] h-[7rem]">
            <div className="flex flex-col justify-center items-center mt-1">
              <p className="font-extrabold text-lg">Entry starts</p>
              <p className="font-extrabold text-2xl">~00:38</p>
            </div>
          </Detail>
        </div>
        <svg
          viewBox="0 0 240 65"
          color="text"
          fill="#cbd5e1"
          xmlns="http://www.w3.org/2000/svg"
          class="sc-grXZZQ ktVOoD"
        >
          <path
            d="M10.0001 15.7243L10.0003 1H234L234 15.7247C234 22.4864 229.749 28.5181 223.381 30.7923L138.48 61.1141C127.823 64.9203 116.177 64.9203 105.519 61.1141L20.6188 30.7924C14.2508 28.5181 10.0001 22.4862 10.0001 15.7243Z"
            fill="var(--colors-failure)"
          ></path>

          <text
            x="92"
            y="32"
            font-size="20"
            fill="#a1a1aa"
            className="font-bold"
          >
            Down
          </text>
        </svg>
      </div>
    </Card>
  );
}
