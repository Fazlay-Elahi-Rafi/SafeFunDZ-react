import React from "react";
import Slider from "react-slick";

import SectionHead from "../Global/SectionHead";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import { BlogData } from "../../data/indexData";
import SingleBlog from "./SingleBlog";

export default function Blog({ parentClass }) {
  function ArrowRight({ className, style, onClick }) {
    return (
      <div className="global__arrow blog__arrow--right justify-content-start">
        <FaArrowRight className="global__arrow-default" onClick={onClick} />
      </div>
    );
  }
  function ArrowLeft({ className, style, onClick }) {
    return (
      <div className="global__arrow blog__arrow--left justify-content-end">
        <FaArrowLeft className="global__arrow-default" onClick={onClick} />
      </div>
    );
  }

  var settings = {
    centerMode: false,
    arrows: true,
    slidesToShow: 3,
    draggable: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    responsive: [
      {
        breakpoint: 991,
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
      <div className={`blog ${parentClass}`}>
        <div className="container p-sm-0">
          <SectionHead text="our blog" desc="Checkout latest news" />
          <div className="row">
            <Slider className="blog__slider" {...settings}>
              {BlogData.length > 0 &&
                BlogData.map((blog) => {
                  return <SingleBlog key={blog.id} {...blog} fade="" />;
                })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
