import React from "react";

import Title from "../components/Global/Title";
import { settings } from "../components/07-Testimonial/settings";

import Hero from "../components/01-Hero/Hero";
import Cases from "../components/02-Cases/Cases";
import About from "../components/03-About/About";
import Service from "../components/04-Service/Service";
import Org from "../components/05-Org/Org";
import Num from "../components/06-Num/Num";
import Testimonial from "../components/07-Testimonial/Testimonial";
import Team from "../components/08-Team/Team";
import Blog from "../components/09-Blog/Blog";

export default function HomePage() {
  return (
    <>
      <Title title="SafeFunDz" />
      <Hero />
      <Cases parentClass="global__py" />
      <About />
      <Service
        parentClass="global__py pt-0"
        childClass="service__card-linear"
      />
      <Org />
      <Num />
      <Testimonial
        parentClass="testimonial__py"
        containerClass="container p-sm-0"
        settings={settings}
      />
      <Team parentClass="global__py" />
      <Blog parentClass="global__py pt-0" />
    </>
  );
}
