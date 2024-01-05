import React from "react";
import { Link } from "react-router-dom";

import { FaArrowUpLong } from "react-icons/fa6";

import star from "../../img/8start.svg";
import donation from "../../img/donation-2.svg";

export default function HeroThree() {
  return (
    <>
      <header className="hero__three">
        <div className="hero__three-layer">
          <div className="container p-sm-0">
            <div className="row align-items-center justify-content-between">
              <div className="col-12 col-lg-6">
                <div className="d-flex align-items-center">
                  <img className="hero__two-i" src={star} alt="icon" />
                  <h4 className="global__rise hero__three-gray">
                    Raise your Hand to the right place
                  </h4>
                </div>
                <h1 className="global__title">
                  Help the people make big changes and help this world.
                </h1>
                <p className="global__desc hero__three-gray">
                  Crowdfunding is a way to raise money for an individual or
                  organization by collecting donations through family, friends
                  strangers and more.
                </p>
                <Link to="/donate" className="global__btn hero__three-btn">
                  Get Started
                  <FaArrowUpLong className="global__btn-arrow" />
                </Link>
              </div>
              <div className="col-12 d-flex justify-content-end mt-5 mt-sm-3">
                <div className="">
                  <div className="hero__three-box">
                    <div className="hero__three-box--icon">
                      <img className="img-fluid" src={donation} alt="image" />
                    </div>
                    <div className="">
                      <h3 className="hero__three-box--num">$1,45,000 Raised</h3>
                      <div className="progress hero__three-progress">
                        <div
                          className="progress-bar hero__three-progress--bar"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
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
