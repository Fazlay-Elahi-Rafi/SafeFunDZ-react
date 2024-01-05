import React from "react";

import Title from "../components/Global/Title";
import { settingThree } from "../components/07-Testimonial/settings";

import HeroTwo from "../components/01-Hero/Hero-2";
import Team from "../components/08-Team/Team";
import Collection from "../components/06-Num/collection";
import AboutUs from "../components/11-Donation/AboutUs";
import Service from "../components/04-Service/Service";
import Cases from "../components/02-Cases/Cases";
import Testimonial from "../components/07-Testimonial/Testimonial";
import News from "../components/17-News/news";

export default function HomePageTwo() {
  return (
    <>
      <Title title="SafeFunDz" />

      <HeroTwo />
      <Collection />
      <AboutUs />
      <Service parentClass="global__py service__bg" />
      <Cases parentClass="global__white global__py pt-0" />
      <Testimonial parentClass="testimonial__py" settings={settingThree} />
      <Team parentClass="global__py global__white" />
      <News />
    </>
  );
}
