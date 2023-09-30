import React from "react";

import Title from "../components/Global/Title";
import Banner from "../components/Global/Banner";

import Gallery from "../components/13-Gallery/Gallery";

export default function BlogPage() {
  return (
    <>
      <Title title="SafeFunDz" />
      <Banner cls="banner" bannerTitle="gallery" bannerTxt="gallery" />

      <Gallery />
    </>
  );
}
