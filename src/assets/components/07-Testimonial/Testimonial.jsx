import React from "react";
import Slider from "react-slick";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import SingleCard from "./SingleCard";
import SectionHead from "../Global/SectionHead";
import { Testimonials } from "../../data/indexData";

export default function Testimonial() {
  function ArrowRight({ className, style, onClick }) {
    return (
      <div className="global__arrow testimonial__arrow-right justify-content-start">
        <FaArrowRight className="global__arrow-default" onClick={onClick} />
      </div>
    );
  }
  function ArrowLeft({ className, style, onClick }) {
    return (
      <div className="global__arrow testimonial__arrow-left justify-content-end">
        <FaArrowLeft className="global__arrow-default" onClick={onClick} />
      </div>
    );
  }

  var settings = {
    centerMode: false,
    arrows: true,
    slidesToShow: 2,
    draggable: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: true,
          dots: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="testimonial">
        <div className="container p-sm-0">
          <SectionHead text="Testimonials" desc="What people say's about us" />
          <div className="testimonial__body">
            <Slider {...settings}>
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
