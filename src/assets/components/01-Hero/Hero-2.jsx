import React from "react";
import { Link } from "react-router-dom";

import { FaArrowUpLong } from "react-icons/fa6";

import star from "../../img/8start.svg";
import dots from "../../img/dots.svg";
import line from "../../img/line.svg";
import circul from "../../img/circul-1.png";
import headerImg from "../../img/header-img-2.png";
import userFrame1 from "../../img/user-frame-1.png";
import userFrame2 from "../../img/user-frame-2.png";
import userFrame3 from "../../img/user-frame-3.png";

export default function HeroTwo() {
  return (
    <>
      <header className="hero__two">
        <div className="container p-sm-0">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-lg-6">
              <div className="d-flex align-items-center">
                <img className="hero__two-i" src={star} alt="icon" />
                <h4 className="global__rise mb-0">
                  Raise your Hand to the right place
                </h4>
              </div>
              <h1 className="global__title global__title-dark">
                Help the people make big changes and help this world.
              </h1>
              <p className="global__desc">
                Crowdfunding is a way to raise money for an individual or
                organization by collecting donations through family, friends
                strangers and more.
              </p>
              <Link to="/donate" className="global__btn">
                Get Started
                <FaArrowUpLong className="global__btn-arrow" />
              </Link>
            </div>
            <div className="col-12 col-md-5 d-none d-lg-block">
              <img className="img-fluid" src={dots} alt="dots image" />
              <div className="hero__frame">
                <img
                  className="img-fluid hero__frame-circle"
                  src={circul}
                  alt="circle image"
                />
                <img
                  className="img-fluid hero__frame-person"
                  src={headerImg}
                  alt="image"
                />

                <img className="hero__frame-lines" src={line} alt="image" />
                <div className="hero__frame-team">
                  <h5 className="hero__frame-team--text global__text">
                    Join our volunteers
                  </h5>
                  <div className="hero__four-frame--users">
                    <img
                      className="hero__four-frame--users---img1"
                      src={userFrame1}
                      alt="image"
                    />
                    <img className="" src={userFrame2} alt="image" />
                    <img
                      className="hero__four-frame--users---img3"
                      src={userFrame3}
                      alt="image"
                    />
                    <div className="">
                      <h5 className="hero__four-frame--num">12+</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
