import React from "react";
import Card from "./BaseCard";
import Header from "./Header";
import Detail from "./Detail";
import { MdOutlinePlayCircleOutline } from "react-icons/md";

export default function NextCard() {
  return (
    <div className="">
      <Card>
        <Header
          text="Next"
          num="#218497"
          className="text-white"
          Bg="bg-purple-700 rounded-t-2xl"
        >
          <MdOutlinePlayCircleOutline />
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
              1.35x Payout
            </text>
          </svg>

          <div className="flex justify-center">
            <Detail className="border-teal-500 p-4 w-[20rem]">
              <div className="flex justify-between mt-1">
                <p className="font-extrabold text-xl">Prize Pool:</p>
                <p className="font-extrabold text-xl ml-10">8.5143 BNB</p>
              </div>
              <div className="flex flex-col my-3">
                <button className="bg-teal-400 py-2 rounded-xl text-white mb-1 text-lg font-bold">
                  Enter UP
                </button>
                <button className="bg-pink-500 py-2 rounded-xl text-white text-lg font-bold">
                  Enter DOWN
                </button>
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
              x="82"
              y="20"
              font-size="12"
              fill="#4c1d95"
              className="font-bold"
            >
              1.07x Payout
            </text>
            <text
              x="92"
              y="40"
              font-size="20"
              fill="#ec4899"
              className="font-bold"
            >
              Down
            </text>
          </svg>
        </div>
      </Card>
    </div>
  );
}
