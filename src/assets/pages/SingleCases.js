import React from "react";
import Title from "../components/Global/Title";
import Banner from "../components/Global/Banner";

import Education from "../components/14-SingleCase/education";
import CaseSlider from "../components/02-Cases/CaseSlider";

export default function SingleCases() {
  return (
    <>
      <Title title="SafeFunDz" />
      <Banner cls="banner" bannerTitle="single case" bannerTxt="single case" />

      <Education />
      <CaseSlider parentClass="global__py pt-0" />
    </>
  );
}
