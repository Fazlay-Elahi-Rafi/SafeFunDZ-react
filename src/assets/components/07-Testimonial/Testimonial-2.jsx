import React from "react";
import Slider from "react-slick";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import SingleCard from "./SingleCard";
import SectionHead from "../Global/SectionHead";
import { Testimonials } from "../../data/indexData";

export default function TestimonialTwo() {
  function ArrowRight({ className, style, onClick }) {
    return (
      <div className="global__arrow testimonial__arrow-two--right position-absolute justify-content-start">
        <FaArrowRight className="global__arrow-default" onClick={onClick} />
      </div>
    );
  }
  function ArrowLeft({ className, style, onClick }) {
    return (
      <div className="global__arrow testimonial__arrow-two--left position-absolute justify-content-end">
        <FaArrowLeft className="global__arrow-default" onClick={onClick} />
      </div>
    );
  }

  var settings = {
    centerMode: false,
    arrows: true,
    slidesToShow: 3,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: true,
          dots: false,
          centerMode: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          dots: true,
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="testimonial testimonial__py">
        <div className="container p-sm-0">
          <SectionHead text="Testimonials" desc="What people say's about us" />
          <div className="testimonial__body">
            <Slider {...settings} className="testimonial__body-slider">
              {Testimonials.length > 0 &&
                Testimonials.map((data) => {
                  return <SingleCard key={data.id} {...data} />;
                })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
