import React from "react";

import Title from "../components/Global/Title";
import Banner from "../components/Global/Banner";
import { settingTwo } from "../components/07-Testimonial/settings";

import Support from "../components/10-Support/Support";
import Donation from "../components/11-Donation/Donation";
import Team from "../components/08-Team/Team";
import Testimonial from "../components/07-Testimonial/Testimonial";
import Blog from "../components/09-Blog/Blog";

export default function AboutPage() {
  return (
    <>
      <Title title="SafeFunDz" />
      <Banner cls="banner mb-0" bannerTitle="about us" bannerTxt="about us" />

      <Support />
      <Donation />
      <Team parentClass="global__py pt-0" />
      <Testimonial
        parentClass="testimonial__py"
        slideClass="slider"
        containerClass="container p-sm-0"
        settings={settingTwo}
      />
      <Blog parentClass="global__py" />
    </>
  );
}
