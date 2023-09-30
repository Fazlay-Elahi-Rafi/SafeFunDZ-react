import React from "react";

import Title from "../components/Global/Title";
import Banner from "../components/Global/Banner";

import Members from "../components/08-Team/Members";

export default function TeamPage() {
  return (
    <>
      <Title title="SafeFunDz" />
      <Banner cls="banner" bannerTitle="Our Team" bannerTxt="our team" />

      <Members parentClass="global__py pt-0" />
    </>
  );
}
