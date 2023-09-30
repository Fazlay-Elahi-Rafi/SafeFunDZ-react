import React from "react";
import Title from "../components/Global/Title";
import Banner from "../components/Global/Banner";

import Volunter from "../components/15-Volunter/volunter";

export default function VolunterPage() {
  return (
    <>
      <Title title="SafeFunDz" />
      <Banner
        cls="banner"
        bannerTitle="become a volunter"
        bannerTxt="become a volunter"
      />

      <Volunter />
    </>
  );
}
