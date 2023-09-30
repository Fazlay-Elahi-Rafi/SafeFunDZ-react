import React from "react";

import Title from "../components/Global/Title";
import Banner from "../components/Global/Banner";

import Info from "../components/12-ContactUs/Info";
import Contact from "../components/12-ContactUs/Contact";
import GoogleMap from "../components/12-ContactUs/GoogleMap";

export default function ContactPage() {
  return (
    <>
      <Title title="SafeFunDz" />
      <Banner cls="banner" bannerTitle="contact us" bannerTxt="contact us" />

      <Info />
      <Contact />
      <GoogleMap />
    </>
  );
}
