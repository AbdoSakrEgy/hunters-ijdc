import AOSAnimationInit from "@/app/_components/ui/aos-animation-init";
import "aos/dist/aos.css";
import Landing from "./landing";
import LiveSection from "./liveSection";
import RacingTable from "./racingTable";
import SelectedHorse from "./selectedHorse";
import Stats from "./stats";

export default function Page() {
  return (
    <main className="flex justify-center items-center">
      <main className="flex flex-col w-full">
        <Landing />
        <RacingTable />
        <LiveSection />
        <SelectedHorse />
        <Stats />
      </main>
      <AOSAnimationInit />
    </main>
  );
}
