import React from "react";

import Title from "../components/Global/Title";

import HeroTwo from "../components/01-Hero/Hero-2";
import Team from "../components/08-Team/Team";

export default function HomePageTwo() {
  return (
    <>
      <Title title="SafeFunDz" />

      <HeroTwo />
      <Team parentClass="global__py bg-white" />
    </>
  );
}
