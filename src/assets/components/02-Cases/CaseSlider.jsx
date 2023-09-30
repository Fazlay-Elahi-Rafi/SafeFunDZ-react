import React from "react";
import Slider from "react-slick";

import SectionHead from "../Global/SectionHead";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import { CasesData } from "../../data/indexData";
import SingleCase from "./SingleCase";

export default function CaseSlider({ parentClass }) {
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
      <div className={`cases ${parentClass}`}>
        <div className="container p-sm-0">
          <SectionHead
            text="our cases"
            desc=" Popular causes what you should know"
          />
          <div className="row">
            <Slider {...settings}>
              {CasesData.length > 0 &&
                CasesData.map((data) => {
                  return <SingleCase key={data.id} {...data} />;
                })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
