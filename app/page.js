import Image from "next/image";
import Banner from "./components/Home/Banner/Banner";
import Statistic from "./components/Home/Satistics/Satistics";
import Company from "./components/Home/Company/Company";
import RecentWorks from "./components/Home/RecentWork/RecentWorks";
import ShortAbout from "./components/Home/ShortAbout/ShortAbout";
import ConstructionBuild from "./components/Home/WeBuild/ConstructionBuild";

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <ShortAbout />
      <ConstructionBuild />
      <RecentWorks></RecentWorks>
      {/* <Statistic></Statistic> */}
      <Company />
    </main>
  );
}
