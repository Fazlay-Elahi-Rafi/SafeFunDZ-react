import React from "react";

import Title from "../components/Global/Title";
import Banner from "../components/Global/Banner";

import Support from "../components/10-Support/Support";
import Donation from "../components/11-Donation/Donation";
import Team from "../components/08-Team/Team";
import TestimonialTwo from "../components/07-Testimonial/Testimonial-2";
import Blog from "../components/09-Blog/Blog";

export default function AboutPage() {
  return (
    <>
      <Title title="SafeFunDz" />
      <Banner cls="banner mb-0" bannerTitle="about us" bannerTxt="about us" />

      <Support />
      <Donation />
      <Team parentClass="global__py pt-0" />
      <TestimonialTwo />
      <Blog parentClass="global__py" />
    </>
  );
}
