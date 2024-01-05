import React from "react";

import Title from "../components/Global/Title";
import { settingThree } from "../components/07-Testimonial/settings";

import HeroThree from "../components/01-Hero/Hero-3";
import Service from "../components/04-Service/Service";
import AboutUs from "../components/11-Donation/AboutUs";
import Num from "../components/06-Num/Num";
import Cases from "../components/02-Cases/Cases";
import Testimonial from "../components/07-Testimonial/Testimonial";
import GalleryTwo from "../components/13-Gallery/GalleryTwo";
import Team from "../components/08-Team/Team";
import Blog from "../components/09-Blog/Blog";

export default function HomePageThree() {
  return (
    <>
      <Title title="SafeFunDz" />
      <HeroThree />
      <Service parentClass="global__py service2__bg" />
      <AboutUs />
      <Num />
      <Cases parentClass="global__white global__py" />
      <Testimonial parentClass="testimonial__py" settings={settingThree} />
      <GalleryTwo />
      <Team parentClass="global__py global__white" />
      <Blog parentClass="global__py pt-0" />
    </>
  );
}
