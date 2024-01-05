import React from "react";
import Slider from "react-slick";

import SingleCard from "./SingleCard";
import SectionHead from "../Global/SectionHead";
import { Testimonials } from "../../data/indexData";

export default function Testimonial({
  parentClass,
  containerClass,
  slideClass,
  settings,
}) {
  return (
    <>
      <div className={`testimonial ${parentClass}`}>
        <div className={`${containerClass}`}>
          <SectionHead text="Testimonials" desc="What people say's about us" />
          <div className="testimonial__body">
            <Slider {...settings} className={`testimonial__body-${slideClass}`}>
              {Testimonials.length > 0
                ? Testimonials.map((data) => {
                    return <SingleCard key={data.id} {...data} />;
                  })
                : window.location.reload()}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
