import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import { CasesData } from "../../data/indexData";

import SingleCase from "./SingleCase";
import SectionHead from "../Global/SectionHead";

export default function Cases() {
  function ArrowRight(props) {
    const { className, style, onClick } = props;
    return (
      <div className="global__arrow cases__arrow-bottom--right position-absolute justify-content-start">
        <FaArrowRight className="global__arrow-default" onClick={onClick} />
      </div>
    );
  }
  function ArrowLeft(props) {
    const { className, style, onClick } = props;
    return (
      <div className="global__arrow cases__arrow-bottom--left position-absolute justify-content-end">
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
      <div className="cases global__py">
        <div className="container p-sm-0">
          <SectionHead
            text="Our cases"
            desc="Popular causes what you should know"
          />
          <div className="row">
            <Slider {...settings}>
              {CasesData.length > 0
                ? CasesData.splice(0, 5).map((data, index) => (
                    <SingleCase key={data.id} {...data} />
                  ))
                : window.location.reload()}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
