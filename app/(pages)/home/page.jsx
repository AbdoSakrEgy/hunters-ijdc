import Landing from "./landing";
import LiveSection from "./liveSection";
import RacingTable from "./racingTable";
import SelectedHorse from "./selectedHorse";
import Stats from "./stats";
import FooterComp from "./footerComp";

export default function Page() {
  return (
    <main className="flex justify-center items-center">
      <main className="flex flex-col w-full">
        <Landing />
        <RacingTable />
        <LiveSection />
        <SelectedHorse/>
        <Stats/>
        <FooterComp />
      </main>
    </main>
  );
}
