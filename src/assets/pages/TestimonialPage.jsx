import React from "react";

import Title from "../components/Global/Title";
import Banner from "../components/Global/Banner";
import SectionHead from "../components/Global/SectionHead";

import SingleCard from "../components/07-Testimonial/SingleCard";
import { Testimonials } from "../data/indexData";
import Blog from "../components/09-Blog/Blog";
import Collection from "../components/06-Num/collection";

export default function TestimonialPage() {
  return (
    <>
      <Title title="SafeFunDz" />
      <Banner
        cls="banner"
        bannerTitle="testimonials"
        bannerTxt="testimonials"
      />

      <div className="testimonial bg-white py-0">
        <SectionHead
          parentClass="bg-white m-0"
          text="Testimonials"
          desc="What people say's about us"
        />
        <div className="testimonial__body-bg">
          <div className="container p-sm-0">
            <div className="row px-3 px-sm-0">
              <div className="testimonial__body-items">
                {Testimonials.length > 0 &&
                  Testimonials.map((data) => {
                    return <SingleCard key={data.id} {...data} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Collection />
      <Blog parentClass="global__py" />
    </>
  );
}
