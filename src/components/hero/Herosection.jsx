import React from "react";
import Allmovies from "../movies_section/Allmovies";
import FetchMovie from "../movies_section/FetchMovie";
// import FetchMovie from "../movies_section/FetchMovie";
import DownloadSection from "./DownloadSection";
// import EnjoySection from "./EnjoySection";
// import KidsSection from "./KidsSection";

const Herosection = () => {
  return (
    <section className="relative h-[300px] w-full -z-[9999]">
      <DownloadSection />
      <FetchMovie />
    </section>
  );
};

export default Herosection;
