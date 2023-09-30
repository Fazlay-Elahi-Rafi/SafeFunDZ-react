import React from "react";

import Title from "../components/Global/Title";
import Banner from "../components/Global/Banner";

import CaseList from "../components/02-Cases/CaseList";

export default function CasesPage() {
  return (
    <>
      <Title title="SafeFunDz" />
      <Banner cls="banner" bannerTitle="case list" bannerTxt="case list" />

      <CaseList />
    </>
  );
}
