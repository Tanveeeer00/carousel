import ExpiredCard from "@/components/ExpiredCard";
import LaterCard from "@/components/LaterCard";
import LiveCard from "@/components/LiveCard";
import Navbar from "@/components/Navbar";
import NextCard from "@/components/NextCard";

export default function Home() {
  return (
    <div className=" bg-indigo-200 overflow-x-auto w-full">
      <div className="mt-5 fixed w-full">
        <Navbar />
      </div>
      <div className="flex items-center min-h-screen h-auto overflow-x-scroll w-[130rem] gap-5">
        <ExpiredCard />
        <LiveCard />
        <NextCard />
        <LaterCard />
      </div>
    </div>
  );
}
