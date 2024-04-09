import ExpiredCard from "@/components/ExpiredCard";
import LaterCard from "@/components/LaterCard";
import LiveCard from "@/components/LiveCard";
import Navbar from "@/components/Navbar";
import NextCard from "@/components/NextCard";

export default function Home() {
  return (
    <div className=" bg-indigo-200 w-full fixed">
      <Navbar />

      <div className="flex items-center min-h-screen w-full px-3 h-auto mt-2 overflow-x-auto gap-5">
        <ExpiredCard />
        <LiveCard />
        <NextCard />
        <LaterCard />
      </div>
    </div>
  );
}
