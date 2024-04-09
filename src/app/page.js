import ExpiredCard from "@/components/ExpiredCard";
import LaterCard from "@/components/LaterCard";
import LiveCard from "@/components/LiveCard";
import Navbar from "@/components/Navbar";
import NextCard from "@/components/NextCard";

export default function Home() {
  return (
    <div className=" bg-indigo-200 w-full fixed">
      <Navbar />

      <div className="min-h-screen w-full mt-12 overflow-x-auto ">
        <div className="flex items-center gap-5">
          <ExpiredCard />
          <LiveCard />
          <NextCard />
          <LaterCard />
        </div>
      </div>
    </div>
  );
}
